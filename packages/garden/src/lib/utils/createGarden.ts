import { GardenController } from '../classes';
import { GardenGroups } from '../types';
import { groupBy } from '../utils/groupBy';

export function createGarden<TData, TCustomGroupByKeys, TContext>({
	customGroupByKeys,
	data: { value: data },
	fieldSettings,
	grouping: {
		value: { horizontalGroupingAccessor, verticalGroupingKeys },
	},
	visuals,
}: GardenController<TData, TCustomGroupByKeys, TContext>): GardenGroups<TData> {
	const allGroupingKeys: string[] = [horizontalGroupingAccessor as string];
	if (verticalGroupingKeys) {
		verticalGroupingKeys.forEach((key) => {
			allGroupingKeys.push(key);
		});
	}

	const groupedData = groupBy({
		arr: data,
		keys: allGroupingKeys,
		groupDescriptionFunc: visuals?.getGroupDescriptionFunc,
		fieldSettings: fieldSettings,
		isExpanded: visuals?.collapseSubGroupsByDefault,
		customGroupByKeys: customGroupByKeys?.value,
		preGroupFiltering: (s) => s,
		depth: 0,
	});

	return groupedData;
}
