import { FieldSettings, GardenGroup, GardenGroups, Status, GroupDescriptionFunc } from '../types';
import { PreGroupByFiltering, StatusView } from '../types';

interface GroupByArgs<T, K extends keyof T> {
	arr: T[];
	keys: K[];
	status?: StatusView<T>;
	groupDescriptionFunc?: GroupDescriptionFunc<T>;
	fieldSettings?: FieldSettings<T, string>;
	isExpanded?: boolean;
	preGroupFiltering: PreGroupByFiltering<T>;
	customGroupByKeys?: Record<string, unknown>;
	depth: number;
}

const lookupGroup = <T>(acc: GardenGroups<T>, valueKey: string): GardenGroup<T> | undefined => {
	return acc.find((x) => x.value === valueKey);
};

export function groupBy<T, K extends keyof T>({
	arr,
	keys,
	customGroupByKeys,
	fieldSettings,
	groupDescriptionFunc = () => '',
	isExpanded,
	preGroupFiltering,
	status,
	depth,
}: GroupByArgs<T, K>): GardenGroups<T> {
	const key = (keys[0] && keys[0].toString()) || undefined;
	if (!key) return [];
	if (!arr || arr.length === 0) return [];

	const fieldSetting = fieldSettings?.[key];

	let gardengroups: GardenGroups<T> = [];

	//Inverse grouping of array
	if (Array.isArray(arr[0][key])) {
		gardengroups = groupByArray({
			arr: arr,
			preGroupFiltering: preGroupFiltering,
			key: key,
			fieldSettings: fieldSettings,
			isExpanded: depth === 0 ? true : isExpanded,
		});
	} else {
		gardengroups = preGroupFiltering(arr, key).reduce((acc, item) => {
			const itemKeys: string[] | string = fieldSetting?.getKey
				? fieldSetting.getKey(item, fieldSetting?.key || key, customGroupByKeys)
				: item[key];

			const itemKeysArray = Array.isArray(itemKeys) ? itemKeys : [itemKeys];
			itemKeysArray.forEach((valueKey: string) => {
				if (!valueKey) valueKey = '(Blank)';

				const group = lookupGroup(acc, valueKey);

				if (group) {
					group.items.push(item);
					group.count++;
				} else {
					acc.push({
						groupKey: key as keyof T,
						value: valueKey,
						count: 1,
						isExpanded: Boolean(depth === 0 ? true : isExpanded),
						items: [item],
						subGroups: [],
						description: groupDescriptionFunc(item, key),
						subGroupCount: 0,
						depth: depth,
					});
				}
			});

			return acc;
		}, [] as GardenGroups<T>);
	}

	if (keys.length === 0) return gardengroups;

	const nextKeys = keys.slice(1);

	gardengroups.forEach((_, index) => {
		if (status) {
			if (status.statusGroupFunc) {
				gardengroups[index].status = status.statusGroupFunc(gardengroups[index]);
			} else if (status.shouldAggregate) {
				let worstStatus: Status = status.statusItemFunc(gardengroups[index].items[0]);

				gardengroups[index].items.map((x) => {
					const itemStatus = status.statusItemFunc(x);
					if (itemStatus.rating < worstStatus.rating) {
						worstStatus = itemStatus;
					}
				});
				gardengroups[index].status = worstStatus;
			}
		}

		gardengroups[index].subGroups = groupBy({
			arr: gardengroups[index].items,
			keys: nextKeys,
			status: status,
			groupDescriptionFunc: groupDescriptionFunc,
			fieldSettings: fieldSettings,
			isExpanded: isExpanded,
			customGroupByKeys: customGroupByKeys,
			preGroupFiltering: preGroupFiltering,
			depth: gardengroups[index].depth + 1,
		});

		if (nextKeys.length > 0) {
			gardengroups[index].items = [];

			gardengroups[index].subGroupCount = gardengroups[index].subGroups.length;
		}
	});

	return gardengroups;
}

interface GroupByArrayArgs<T> {
	arr: T[];
	key: keyof T | string;
	preGroupFiltering: (arr: T[], groupByKey: string) => T[];
	fieldSettings?: FieldSettings<T, string>;
	isExpanded?: boolean;
}

function groupByArray<T>({
	arr,
	key,
	preGroupFiltering,
	fieldSettings,
	isExpanded,
}: GroupByArrayArgs<T>): GardenGroups<T> {
	const fieldSetting = fieldSettings?.[key];
	const childKey = fieldSetting?.key;

	/** List of all unique identifiers in child array of all arr entries  */
	const groupNames = preGroupFiltering(arr, key as string).reduce((prev, curr) => {
		const childArray = curr[key as string]
			.map((nestedObject: Record<string, unknown> | string | number) =>
				typeof nestedObject === 'object' ? nestedObject[childKey as string] : nestedObject
			)
			.filter((v: string | number, i: number, a: Array<string | number>) => a.indexOf(v) === i) as Array<
			number | string
		>;

		return [...prev, ...childArray.filter((identifier) => !prev.includes(identifier))];
	}, [] as (string | number)[]);

	const groups: GardenGroups<T> = groupNames.map((groupName): GardenGroup<T> => {
		const parentsContainingChildren = arr.filter((item) =>
			getChildArray(item, key as string)
				.map((y) => (typeof y === 'object' ? y[childKey as string] : y))
				.includes(groupName)
		);

		return {
			groupKey: key as keyof T,
			isExpanded: Boolean(isExpanded),
			subGroups: [],
			value: groupName as string,
			count: 0,
			items: parentsContainingChildren,
			subGroupCount: 0,
			depth: 0,
		};
	});

	/** Makes a group for the items with an empty array */
	const blanks = arr.filter((item) => item[key as string].length === 0);

	if (blanks.length > 0) {
		groups.push({
			groupKey: key as keyof T,
			isExpanded: Boolean(isExpanded),
			subGroups: [],
			count: 0,
			value: '(Blank)',
			items: blanks,
			subGroupCount: 0,
			depth: 0,
		});
	}

	return groups;
}

function getChildArray<T>(item: T, key: string) {
	return item[key as keyof T] as unknown as Array<Record<string, unknown>>;
}
