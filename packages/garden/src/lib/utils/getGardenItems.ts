import { GardenGroup } from '../types';
import { GardenItem } from '../types/gardenItem';

type ColumnStates = 'No items' | 'No subgroups' | 'Not Expanded';

const getSubGroupItems = <TData extends Record<PropertyKey, unknown>>(
  column: GardenGroup<TData>,
  subGroupIndex: number,
  includeSubGroupValue = false
): GardenItem<TData>[] => {
  const items: GardenItem<TData>[] = [];
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

const getGardenColumnState = <T extends Record<PropertyKey, unknown>>(column: GardenGroup<T>): ColumnStates | null => {
  const columnHasNoItems = column.count === 0 && column.subGroupCount === 0;
  if (columnHasNoItems) return 'No items';

  const columnHasNoSubGroups = column.items.length > 0;
  if (columnHasNoSubGroups) return 'No subgroups';

  const mainColumnSubGroupIsExpanded = column.isExpanded;

  if (!mainColumnSubGroupIsExpanded) return 'Not Expanded';

  return null;
};

/**
 * Function that will check a garden column and return all its items.
 * Will check if there are subgroups and iterate through them to find its items, only if the subgroup is expanded.
 * @param column A garden column
 * @param includeSubGroupValue Set to true if group value is wanted inside return value
 * @returns Array of objects with garden items and their depth (and subgroup value if second parameter is true)
 */
export const getGardenItems = <T extends Record<PropertyKey, unknown>>(
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
