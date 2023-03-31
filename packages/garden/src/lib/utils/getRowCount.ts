import { GardenGroup, GardenGroups } from '../types';

const getSubGroupCounts = <T extends Record<PropertyKey, unknown>>(subGroup: GardenGroup<T>): number => {
  let count = subGroup.subGroups.length;
  /** If subgroup is not expanded - we only want the number of group headers. Don't care about items. */
  if (false /** !subGroup?.isExpanded  */) {
    // eslint-disable-next-line no-self-assign
    count = count;
  } else if (subGroup?.subGroupCount === 0) {
    /** If subgroup is expanded, but it's the last subgroup - we want to count all the items  */
    count += subGroup.totalItemsCount;
  } else {
    subGroup.subGroups.forEach((_, index) => {
      count += getSubGroupCounts(subGroup.subGroups[index]);
    });
  }

  return count;
};
const getGardenRowCountPerColumn = <T extends Record<PropertyKey, unknown>>(gardenColumn: GardenGroup<T>): number => {
  let count = gardenColumn.subGroups.length;
  gardenColumn.subGroups.forEach((_, index) => {
    const subGroup = gardenColumn.subGroups[index];
    count += getSubGroupCounts(subGroup);
  });

  return count;
};
export const getRowCount = <T extends Record<PropertyKey, unknown>>(garden: GardenGroups<T>): number => {
  let count = 0;
  // If garden is not grouped, then all garden items will have subgroupcount equal to zero
  // So we can just check first item and then return.
  if (garden[0]?.subGroupCount === 0) {
    return Math.max(...garden.map((gardenItem) => gardenItem.totalItemsCount));
  }

  // If garden is grouped, then we need to count all garden group headers and all items inside
  // the groups that are expanded.
  garden.forEach((_, index) => {
    const columnCount = getGardenRowCountPerColumn(garden[index]);

    count = count > columnCount ? count : columnCount;
  });
  return count;
};
