import { FieldSettings, GardenGroup, GardenGroups, GroupDescriptionFunc } from '../types';
import { PreGroupByFiltering } from '../types';

interface GroupByArgs<TData, TCustomGroupByKeys extends Record<string, string>> {
	arr: TData[];
	keys: string[];
	groupDescriptionFunc?: GroupDescriptionFunc<TData>;
	fieldSettings?: FieldSettings<TData, TCustomGroupByKeys, string>;
	isExpanded?: boolean;
	preGroupFiltering: PreGroupByFiltering<TData>;
	customGroupByKeys?: TCustomGroupByKeys;
	depth: number;
}

const lookupGroup = <T>(acc: GardenGroups<T>, valueKey: string): GardenGroup<T> | undefined => {
	return acc.find((x) => x.value === valueKey);
};

export function groupBy<TData, TCustomGroupByKeys extends Record<string, string>>({
	arr,
	keys,
	customGroupByKeys,
	fieldSettings,
	groupDescriptionFunc = () => '',
	isExpanded,
	preGroupFiltering,
	depth,
}: GroupByArgs<TData, TCustomGroupByKeys>): GardenGroups<TData> {
	const key = (keys[0] && keys[0].toString()) || undefined;
	if (!key) return [];
	if (!arr || arr.length === 0) return [];

	const fieldSetting = fieldSettings?.[key];

	let gardengroups: GardenGroups<TData> = [];

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
						groupKey: key as keyof TData,
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
		}, [] as GardenGroups<TData>);
	}

	if (keys.length === 0) return gardengroups;

	const nextKeys = keys.slice(1);

	gardengroups.forEach((_, index) => {
		gardengroups[index].subGroups = groupBy({
			arr: gardengroups[index].items,
			keys: nextKeys,
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

interface GroupByArrayArgs<TData, TCustomGroupByKeys extends Record<string, string>> {
	arr: TData[];
	key: keyof TData | string;
	preGroupFiltering: (arr: TData[], groupByKey: string) => TData[];
	fieldSettings?: FieldSettings<TData, TCustomGroupByKeys, string>;
	isExpanded?: boolean;
}

function groupByArray<TData, TCustomGroupByKeys extends Record<string, string>>({
	arr,
	key,
	preGroupFiltering,
	fieldSettings,
	isExpanded,
}: GroupByArrayArgs<TData, TCustomGroupByKeys>): GardenGroups<TData> {
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

	const groups: GardenGroups<TData> = groupNames.map((groupName): GardenGroup<TData> => {
		const parentsContainingChildren = arr.filter((item) =>
			getChildArray(item, key as string)
				.map((y) => (typeof y === 'object' ? y[childKey as string] : y))
				.includes(groupName)
		);

		return {
			groupKey: key as keyof TData,
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
			groupKey: key as keyof TData,
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
