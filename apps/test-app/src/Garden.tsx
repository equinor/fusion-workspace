import {
  Garden,
  GardenController,
  GardenGroups,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
} from '@equinor/workspace-garden';

const cont = new GardenController<Item, any, any, any>({
  getDisplayName: (i) => i.id,
  getIdentifier: (i) => i.id,
  initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
});

cont.getDisplayName = (i) => i.id;

export function GardenServer() {
  return (
    <Garden<Item>
      getBlockAsync={getBlockAsync}
      getGardenMeta={getGardenMeta}
      getHeader={getHeader}
      getDisplayName={(i) => i.id}
      getIdentifier={(j) => j.id}
      initialGrouping={'age'}
    />
  );
}

type Item = {
  id: string;
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
  const { xEnd, xStart, yEnd, yStart, groupingKey } = args;
  console.log('Getting block');
  console.log(`
      key: ${groupingKey}
      x: ${xStart} - ${xEnd},
      y: ${yStart} - ${yEnd}
    `);

  return new Promise((res) =>
    setTimeout(
      () =>
        res(
          new Array(xEnd - xStart + 1).fill(0).map((s, i) => ({
            count: yEnd - yStart + 1,
            depth: 0,
            groupKey: groupingKey,
            isExpanded: false,
            items: new Array(i === 17 && yStart > 50 ? 0 : yEnd - yStart + 1).fill(0).map((_, i) => ({
              id: (i + yStart).toString(),
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

async function getHeader(
  args: Pick<GetBlockRequestArgs, 'xStart' | 'xEnd' | 'groupingKey'>,
  signal: AbortSignal
): Promise<GardenHeaderGroup[]> {
  const { groupingKey, xEnd, xStart } = args;

  console.log('getting header');

  return new Array(xEnd - xStart + 1).fill(0).map((_, i) => ({ count: 0, name: (i + xStart).toString() }));
  // const res = garden.slice(xStart, xEnd + 1).map((s) => ({ count: s.count, name: s.value }));
}
