import { GardenController } from '../classes';
import { GardenGroups } from '../types';
import { groupBy } from '../utils/groupBy';

export function createGarden<TData, TContext>({
	customGroupByKeys,
	data: { value: data },
	fieldSettings,
	grouping: {
		value: { horizontalGroupingAccessor, verticalGroupingKeys },
	},
	visuals,
}: GardenController<TData, TContext>): GardenGroups<TData> {
	const allGroupingKeys: (keyof TData | string)[] = [horizontalGroupingAccessor];
	if (verticalGroupingKeys) {
		verticalGroupingKeys.map((x) => {
			allGroupingKeys.push(x);
		});
	}

	const groupedData = groupBy({
		arr: data,
		keys: allGroupingKeys as any,
		status: visuals?.status,
		groupDescriptionFunc: visuals?.getGroupDescriptionFunc,
		fieldSettings: fieldSettings,
		isExpanded: visuals?.collapseSubGroupsByDefault,
		customGroupByKeys: customGroupByKeys,
		preGroupFiltering: (s) => s,
		depth: 0,
	});

	return groupedData;
}
