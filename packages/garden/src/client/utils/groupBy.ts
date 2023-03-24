import { GardenGroup } from '../../lib';
import { GroupingDefinition } from '../types';

export function groupBy<TData extends Record<PropertyKey, unknown>>(
  data: TData[],
  definition: GroupingDefinition<TData>
): GardenGroup<TData>[] {
  const items = data.map((s) => definition.group(s));

  const groupNames = items.filter((v, i, a) => a.indexOf(v) === i);

  const groups = groupNames.map((item): GardenGroup<TData> => {
    const groupItems = data.filter((s) => definition.group(s) === item);
    return {
      depth: 0,
      count: groupItems.length,
      groupKey: definition.name,
      isExpanded: false,
      items: groupItems,
      subGroupCount: 0,
      subGroups: [],
      value: item ?? 'null',
      description: '',
    };
  });

  return groups;
}
