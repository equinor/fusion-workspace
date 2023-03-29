import { useEffect, useRef } from 'react';
import {
  Garden,
  GardenGroup,
  GardenGroups,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetDisplayName,
  GetHeaderBlockRequestArgs,
  GetIdentifier,
} from '../../lib';
import { GroupingDefinition } from '../types';
import { groupBy } from '../utils/groupBy';

type GardenClientProps<TData extends Record<PropertyKey, unknown>> = {
  data: TData[];
  groupingDefinitions: GroupingDefinition<TData>[];
  initialGroupingKey: string;
  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  columnStart?: (garden: GardenGroups<any>, keys: string[]) => number;
};

/**
 * Garden component with client side data
 */
export function GardenClient<TData extends Record<PropertyKey, unknown>>({
  data,
  groupingDefinitions,
  initialGroupingKey,
  getDisplayName,
  getIdentifier,
  columnStart,
}: GardenClientProps<TData>) {
  const garden = useRef<GardenGroups<TData>>(
    groupBy(data, groupingDefinitions.find((s) => s.name === initialGroupingKey)!)
  );

  /** Group by default key */
  useEffect(() => {
    /**Could call garden api to notify change */
    garden.current = groupBy(data, groupingDefinitions.find((s) => s.name === initialGroupingKey)!);
  }, [data]);

  const getBlockAsync = async ({
    columnEnd,
    columnStart,
    rowEnd,
    rowStart,
  }: GetBlockRequestArgs): Promise<GardenGroup<any>[]> =>
    garden.current.slice(columnStart, columnEnd + 1).map((s) => ({
      ...s,
      items: s.items.slice(rowStart, rowEnd + 1),
      subGroups: s.subGroups.slice(rowStart, rowEnd + 1),
    }));

  const getHeader = async ({ columnEnd, columnStart }: GetHeaderBlockRequestArgs): Promise<GardenHeaderGroup[]> =>
    garden.current.slice(columnStart, columnEnd + 1).map((s) => ({ count: s.count, name: s.value }));

  const getGardenMeta = async (keys: string[]): Promise<GardenMeta> => {
    /** Regroup garden */
    garden.current = groupBy(data, groupingDefinitions.find((s) => s.name === keys[0])!);
    const longestRow = garden.current.reduce((acc, curr) => (curr.count > acc ? curr.count : acc), 0);
    return {
      columnCount: garden.current.length,
      columnStart: columnStart ? columnStart(garden.current, keys) : null,
      allGroupingOptions: groupingDefinitions.map((s) => s.name),
      validGroupingOptions: groupingDefinitions.map((s) => s.name).filter((s) => !keys.includes(s)),
      rowCount: longestRow,
    };
  };

  return (
    <Garden
      dataSource={{
        getBlockAsync,
        getGardenMeta,
        getHeader,
      }}
      getDisplayName={getDisplayName}
      getIdentifier={getIdentifier}
      initialGrouping={initialGroupingKey}
    />
  );
}
