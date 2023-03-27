import {
  Garden,
  GardenClient,
  GardenGroups,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetHeaderBlockRequestArgs,
} from '@equinor/workspace-garden';
import { useState } from 'react';

export function GardenServer() {
  const [mode, setMode] = useState<'server' | 'client'>('client');
  return (
    <>
      <button onClick={() => setMode((s) => (s === 'client' ? 'server' : 'client'))}>{mode}</button>
      {mode === 'client' ? (
        <GardenClient<Item>
          data={[
            { id: '123', age: 18 },
            { id: '124', age: 18 },
            { id: '124', age: 18 },
          ]}
          getDisplayName={(i) => i.id}
          getIdentifier={(i) => i.id}
          groupingDefinitions={[
            { group: (i) => i.id, name: 'id' },
            { group: (i) => i.age.toString(), name: 'age' },
          ]}
          initialGroupingKey={'id'}
        />
      ) : (
        <Garden<Item>
          getBlockAsync={getBlockAsync}
          getGardenMeta={getGardenMeta}
          getHeader={getHeader}
          getDisplayName={(i) => i.id}
          getIdentifier={(j) => j.id}
          initialGrouping={'age'}
        />
      )}
    </>
  );
}

type Item = {
  id: string;
  age: number;
};

const getGardenMeta = async (keys: string[]): Promise<GardenMeta> => {
  console.log('Garden meta fetched');
  return Promise.resolve({
    columnCount: 500,
    columnStart: 20,
    groupingOptions: ['id', 'contextId', 'age'].filter((s) => !keys.includes(s)),
    rowCount: 1000,
  });
};

/**
 * Configure how to get blocks
 * @param args
 * @param signal
 * @param garden
 * @returns
 */
async function getBlockAsync(args: GetBlockRequestArgs, signal: AbortSignal): Promise<GardenGroups<any>> {
  const { columnEnd, columnStart, rowEnd, rowStart, groupingKey } = args;
  console.log('Getting block');
  console.log(`
      key: ${groupingKey}
      x: ${columnStart} - ${columnEnd},
      y: ${rowStart} - ${rowEnd}
    `);

  return new Promise((res) =>
    setTimeout(
      () =>
        res(
          new Array(columnEnd - columnStart + 1).fill(0).map((s, i) => ({
            count: rowEnd - rowStart + 1,
            depth: 0,
            groupKey: groupingKey,
            isExpanded: false,
            items: new Array(i === 17 && rowStart > 50 ? 0 : rowEnd - rowStart + 1).fill(0).map((_, i) => ({
              id: (i + rowStart).toString(),
            })),
            subGroupCount: 0,
            subGroups: [],
            value: '',
            description: '',
          }))
        ),
      Math.random() * 800
    )
  );
}

async function getHeader(args: GetHeaderBlockRequestArgs, signal: AbortSignal): Promise<GardenHeaderGroup[]> {
  const { groupingKey, columnEnd, columnStart } = args;

  console.log('getting header');

  return new Array(columnEnd - columnStart + 1)
    .fill(0)
    .map((_, i) => ({ count: 0, name: (i + columnStart).toString() }));
}
