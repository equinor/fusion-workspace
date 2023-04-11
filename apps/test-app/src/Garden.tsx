import { FilterStateGroup } from '@equinor/workspace-filter';
import { GardenConfig } from '@equinor/workspace-fusion/garden';
import {
  GardenGroup,
  GardenGroups,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetHeaderBlockRequestArgs,
  GetSubgroupItemsArgs,
} from '@equinor/workspace-garden';

const makeRequest = (...args: any) => ({} as any);

const getSubgroupItems = async (
  { columnName, groupingKeys, subgroupName }: GetSubgroupItemsArgs,
  filters: FilterStateGroup[],
  signal?: AbortSignal
) => {
  const res = await makeRequest(
    'work-orders/subgroup-items',
    {
      groupingKeys: groupingKeys,
      columnName: columnName,
      subGroupName: subgroupName,
      filter: filters,
    },
    signal
  );

  const r = await (await res).json();
  return r;
};

const getGardenMeta = async (
  keys: string[],
  filters: FilterStateGroup[],
  signal?: AbortSignal
): Promise<GardenMeta> => {
  const res = await makeRequest(
    'work-orders/garden-meta',
    {
      groupingKeys: keys,
      filter: filters,
    },
    signal
  );

  const meta = await res.json();

  return {
    ...meta,
    rowCount: meta.subGroupCount > 0 ? meta.subGroupCount : meta.rowCount,
    groupingOptions: meta.allGroupingOptions,
  };
};

/**
 * Configure how to get blocks
 * @param args
 * @param signal
 * @param garden
 * @returns
 */
async function getBlockAsync(
  args: GetBlockRequestArgs,
  filters: FilterStateGroup[],
  signal?: AbortSignal
): Promise<GardenGroups<any>> {
  const { columnEnd, columnStart, rowEnd, rowStart, groupingKeys } = args;

  const res = await makeRequest(
    'work-orders/garden',
    {
      columnStart,
      columnEnd,
      rowStart,
      rowEnd,
      groupingKeys: groupingKeys,
      filter: filters,
    },
    signal
  );

  const data = await res.json();

  return data.map(
    (s: any): GardenGroup<any> => ({
      ...s,
      value: s.columnName,
    })
  );
}

async function getHeader(
  args: GetHeaderBlockRequestArgs,
  filters: FilterStateGroup[],
  signal?: AbortSignal
): Promise<GardenHeaderGroup[]> {
  const { groupingKeys, columnEnd, columnStart } = args;

  const res = await makeRequest(
    'work-orders/garden',
    {
      columnStart,
      columnEnd,
      rowStart: 0,
      rowEnd: 0,
      groupingKeys: groupingKeys,
      filter: filters,
    },
    signal
  );

  return (await res.json()).map((s: any): GardenHeaderGroup => ({ count: s.totalItemsCount, name: s.columnName }));
}

export const gardenConfig: GardenConfig<any, FilterStateGroup[]> = {
  getBlockAsync,
  getGardenMeta,
  getHeader,
  getSubgroupItems,
  getDisplayName: (i) => i.workOrderNumber,
  initialGrouping: { horizontalGroupingAccessor: 'DisciplineCode', verticalGroupingKeys: [] },
};
