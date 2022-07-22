import { GardenController } from '../Classes';
import { GardenGroups } from '../Models/data';
import { groupBy } from '../Utils/groupBy';


export function createGarden<T>({customGroupByKeys, data, fieldSettings, grouping: {horizontalGroupingAccessor, verticalGroupingKeys}, visuals}: GardenController<T>): GardenGroups<T> {
    const allGroupingKeys: (keyof T | string)[] = [horizontalGroupingAccessor];
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
        preGroupFiltering: ((s) => s),
        depth: 0,
    });

    return groupedData;
}
