import { GardenController } from '../classes';
import { BaseRecordObject, GardenGroups } from '../types';
import { groupBy } from '../utils/groupBy';

export function createGarden<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
  TContext extends Record<PropertyKey, unknown> = never
>(props: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>): GardenGroups<TData> {
  const {
    grouping: {
      value: { horizontalGroupingAccessor, verticalGroupingKeys },
    },
    getData,
    visuals,
    fieldSettings,
    customGroupByKeys,
  } = props;
  const allGroupingKeys: string[] = [horizontalGroupingAccessor as string, ...verticalGroupingKeys];

  const groupedData = groupBy({
    arr: getData(),
    keys: allGroupingKeys as (TExtendedFields | keyof TData)[],
    fieldSettings: fieldSettings,
    isExpanded: !visuals?.collapseSubGroupsByDefault,
    customGroupByKeys: customGroupByKeys?.value,
    preGroupFiltering: (s) => s,
    depth: 0,
  });

  return groupedData;
}
