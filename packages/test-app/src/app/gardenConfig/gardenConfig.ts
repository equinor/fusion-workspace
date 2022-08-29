import { GardenConfig, GardenController, GardenGroup, GardenGroups, GardenItem } from '@equinor/garden';
import { Handover } from '../types';
import { ExtendedGardenFields, handoverFieldSettings } from './fieldSettings';
import { getFieldKeyBasedOnPlannedForecast, getYearAndWeekAndDayFromString, getYearAndWeekFromDate } from './utils';
import HandoverGardenItem from './Visuals/HandoverGardenItem';

export const gardenConfig: GardenConfig<Handover, ExtendedGardenFields, object, unknown> = {
	data: [],
	nodeLabelCallback: (s) => s.commpkgNo,
	objectIdentifier: 'id',
	initialGrouping: { horizontalGroupingAccessor: 'area', verticalGroupingKeys: [] },
	fieldSettings: handoverFieldSettings,
	configFunction,
};

function configFunction(gardenController: GardenController<Handover, any, any, any>) {
	gardenController.visuals.rowHeight = 30;
	gardenController.customViews.customItemView = HandoverGardenItem;
	gardenController.visuals.highlightHorizontalColumn = getHighlightedColumn;
	gardenController.visuals.calculateItemWidth = getItemWidth;
}

export const getHighlightedColumn = (groupByKey: string, customGroupByKeys: Record<string, unknown> | undefined) => {
	const customKeys = customGroupByKeys as any;
	const groupByOption = getFieldKeyBasedOnPlannedForecast(groupByKey, customKeys?.plannedForecast);
	switch (groupByOption) {
		case 'plannedFinishDate':
		case 'forecastFinishDate':
		case 'plannedStartDate':
		case 'forecastStartDate':
		case 'plannedTacDate':
		case 'forecastTacDate':
		case 'demolitionPlannedStartDate':
		case 'demolitionForecastStartDate':
		case 'demolitionPlannedFinishDate':
		case 'demolitionForecastFinishDate':
			return customKeys?.weeklyDaily === 'Daily'
				? getYearAndWeekAndDayFromString(new Date().toString())
				: getYearAndWeekFromDate(new Date());

		default:
			return undefined;
	}
};

export const getItemWidth = (
	garden: GardenGroups<Handover>,
	groupByKey: string,
	customGroupByKeys: Record<string, unknown> | undefined
) => {
	const customKeys = customGroupByKeys as any;
	const columnName = getFieldKeyBasedOnPlannedForecast(groupByKey, customKeys?.plannedForecast);
	const minWidth = 139;
	const gardenItemList: Handover[] = [];
	garden.forEach((column) => {
		const gardenItems = getGardenItems(column);
		gardenItems &&
			gardenItems.forEach((gardenItem) => {
				!isSubGroup(gardenItem) && gardenItemList.push(gardenItem.item);
			});
	});

	const longestKey = Math.max(
		...gardenItemList.map((item) => {
			const titleLength = item[columnName] ? item[columnName]?.toString().length : 0;
			return titleLength >= item.commpkgNo.length ? titleLength : item.commpkgNo.length;
		})
	);

	return Math.max(longestKey * 8 + 80, minWidth);
};

export const isSubGroup = <T>(arg: GardenItem<T> | undefined): arg is GardenGroup<T> => {
	return (arg as GardenGroup<T>).value !== undefined;
};

export const getGardenItems = <T>(
	column: GardenGroup<T> | undefined,
	includeSubGroupValue = false
): GardenItem<T>[] | null => {
	if (!column) {
		return null;
	}
	const columnState = getGardenColumnState(column);

	if (columnState === 'No items') return null;

	if (columnState === 'No subgroups') {
		return column.items.map((item) => {
			return { itemDepth: 0, item };
		});
	}

	if (columnState === 'Not Expanded') {
		return [column];
	}

	const items: GardenItem<T>[] = [];

	column.subGroups.forEach((_, index) => {
		items.push(...getSubGroupItems(column, index, includeSubGroupValue));
	});
	return items;
};
type ColumnStates = 'No items' | 'No subgroups' | 'Not Expanded';
const getGardenColumnState = <T>(column: GardenGroup<T>): ColumnStates | null => {
	const columnHasNoItems = column.count === 0 && column.subGroupCount === 0;
	if (columnHasNoItems) return 'No items';

	const columnHasNoSubGroups = column.items.length > 0;
	if (columnHasNoSubGroups) return 'No subgroups';

	const mainColumnSubGroupIsExpanded = column.isExpanded;

	if (!mainColumnSubGroupIsExpanded) return 'Not Expanded';

	return null;
};
const getSubGroupItems = <T>(
	column: GardenGroup<T>,
	subGroupIndex: number,
	includeSubGroupValue = false
): GardenItem<T>[] => {
	const items: GardenItem<T>[] = [];
	const subGroup = column.subGroups[subGroupIndex];
	const isExpanded = subGroup.isExpanded;

	if (includeSubGroupValue) items.push(subGroup);

	if (subGroup?.subGroupCount === 0 && isExpanded) {
		subGroup.items.forEach((item) => {
			items.push({
				item,
				itemDepth: subGroup.depth,
			});
		});
	} else if (subGroup?.subGroupCount !== 0 && !isExpanded) {
		return items;
	} else {
		subGroup.subGroups.forEach((_, index) => {
			items.push(...getSubGroupItems(subGroup, index, includeSubGroupValue));
		});
	}
	return items;
};
