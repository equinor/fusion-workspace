import {
  CustomItemView,
  Garden,
  GardenGroup,
  GardenGroups,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetHeaderBlockRequestArgs,
  GetSubgroupItemsArgs,
} from '@equinor/workspace-garden';
import { memo, useState } from 'react';

const test = memo((args: CustomItemView<any>) => <div>test</div>);

export function GardenServer() {
  const [mode, setMode] = useState<'server' | 'client'>('client');
  return (
    <Garden<Item>
      dataSource={{
        getSubgroupItems: getSubgroupItems,
        getBlockAsync,
        getGardenMeta,
        getHeader,
      }}
      getDisplayName={(i) => i.workOrderNumber}
      getIdentifier={(j) => j.workOrderUrlId}
      initialGrouping={'DisciplineCode'}
    />
  );
}

const token = '';

const baseURL =
  'https://backend-fusion-data-gateway-test.radix.equinor.com/api/contexts/fc5ffcbc-392f-4d7e-bb14-79a006579337';

type Item = {
  workOrderNumber: string;
  workOrderUrlId: string;
};

const getSubgroupItems = async (
  { columnName, groupingKeys, subgroupName }: GetSubgroupItemsArgs,
  signal: AbortSignal
) => {
  const res = fetch(`${baseURL}/work-orders/subgroup-items`, {
    method: 'POST',
    body: JSON.stringify({
      groupingKeys: groupingKeys,
      columnName: columnName,
      subGroupName: subgroupName,
    }),
    headers: {
      ['AUTHORIZATION']: token,
      ['Content-type']: 'application/json',
    },
    signal,
  });
  const r = await (await res).json();
  return r;
};

const getGardenMeta = async (keys: string[], signal: AbortSignal): Promise<GardenMeta> => {
  console.log('Garden meta fetched');

  const res = fetch(`${baseURL}/work-orders/garden-meta`, {
    method: 'POST',

    body: JSON.stringify(keys),
    headers: {
      ['AUTHORIZATION']: token,
      ['Content-type']: 'application/json',
    },
    signal,
  });

  const meta = await (await res).json();

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
async function getBlockAsync(args: GetBlockRequestArgs, signal: AbortSignal): Promise<GardenGroups<any>> {
  const { columnEnd, columnStart, rowEnd, rowStart, groupingKeys } = args;

  const res = await fetch(`${baseURL}/work-orders/garden`, {
    body: JSON.stringify({
      columnStart,
      columnEnd,
      rowStart,
      rowEnd,
      groupingKeys: groupingKeys,
    }),
    headers: {
      ['authorization']: token,
      ['content-type']: 'application/json',
    },
    method: 'POST',
  });

  const data = await res.json();
  console.log(data);

  return data.map(
    (s): GardenGroup<any> => ({
      ...s,
      value: s.columnName,
    })
  );
}

async function getHeader(args: GetHeaderBlockRequestArgs, signal: AbortSignal): Promise<GardenHeaderGroup[]> {
  const { groupingKeys, columnEnd, columnStart } = args;

  const res = await fetch(`${baseURL}/work-orders/garden`, {
    body: JSON.stringify({
      columnStart,
      columnEnd,
      rowStart: 0,
      rowEnd: 0,
      groupingKeys: groupingKeys,
    }),
    headers: {
      ['authorization']: token,
      ['content-type']: 'application/json',
    },
    method: 'POST',
  });

  return (await res.json()).map((s): GardenHeaderGroup => ({ count: s.totalItemsCount, name: s.columnName }));
}
