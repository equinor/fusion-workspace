import { Fragment, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';
import { useGardenContext, useGardenGroups } from '../../hooks';

import { useExpand } from '../../hooks/useExpand';
import { useRefresh } from '../../hooks/useRefresh';
import { useVirtualScrolling } from '../../hooks/useVirtualScrolling';
import { GardenGroup } from '../../types';
import { getGardenItems } from '../../utils/getGardenItems';
import { getRowCount } from '../../utils/getRowCount';
import { GardenItemContainer } from '../GardenItemContainer/GardenItemContainer';
import { HeaderContainer } from '../HeaderContainer/HeaderContainer';
import { Layout } from '../Layout/Layout';
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';

export type Block = {
  x: number;
  y: number;
};

export type GetBlockRequestArgs = {
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
};

type VirtualGardenProps<TData extends Record<PropertyKey, unknown>> = {
  width?: number;
  handleOnItemClick: (item: TData) => void;
  //Blocksize must be a number √blockSize === Integer
  blockSize?: number;
  getBlockAsync: (args: GetBlockRequestArgs) => GardenGroup<TData>[];
};

export const VirtualGarden = <
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>({
  width,
  handleOnItemClick,
  blockSize = 9,
  getBlockAsync,
}: VirtualGardenProps<TData>): JSX.Element => {
  const blockSqrt = Math.sqrt(blockSize); //√blockSize

  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const garden = useGardenGroups<TData>();
  const {
    grouping: {
      value: { horizontalGroupingAccessor: gardenKey },
    },
    visuals: { rowHeight, highlightHorizontalColumn },
    customViews: { customGroupView, customItemView },
    customGroupByKeys,
  } = useGardenContext<TData, TExtendedFields, TCustomGroupByKeys, TContext>();

  const refresh = useRefresh();

  const { isScrolling, scrollOffsetFn } = useVirtualScrolling(parentRef);
  const { widths: contextWidths } = useExpand();

  const columnCount = useMemo(() => garden.length, [garden]);
  const rowCount = useMemo(() => getRowCount(garden), [garden]);

  const rowVirtualizer = useVirtual({
    size: rowCount,
    parentRef,
    estimateSize: useCallback(() => rowHeight || 40, [rowHeight]),
    paddingStart: 40,
    // overscan: 2,
  });
  const columnVirtualizer = useVirtual({
    horizontal: true,
    size: columnCount,
    parentRef,
    estimateSize: useCallback(
      (index) => contextWidths[index],

      [contextWidths]
    ),
    keyExtractor: useCallback((index) => index, [contextWidths]),
    scrollOffsetFn,
    useObserver: useCallback(() => ({ height: 0, width: window.innerWidth }), []),
    overscan: 3,
  });

  // const totalSize = rowCount * columnCount;
  const blocks = makeBlocks({ blockSqrt, columnCount, rowCount });
  // console.log('allBlocks ', blocks);

  const { xEnd, xStart, yEnd, yStart } = getCoordinatesInView(
    columnVirtualizer.virtualItems,
    rowVirtualizer.virtualItems
  );

  const xBlockStart = Math.floor(xStart / blockSqrt);
  const xBlockEnd = Math.floor(xEnd / blockSqrt);
  const yBlockStart = Math.floor(yStart / blockSqrt);
  const yBlockEnd = Math.floor(yEnd / blockSqrt);

  // console.log(`
  //   xBlockStart: ${xBlockStart},
  //   xBlockEnd: ${xBlockEnd},
  //   yBlockStart: ${yBlockStart},
  //   yBlockEnd: ${yBlockEnd},
  // `);

  const blocksInView: Block[] = [];

  for (let x = xBlockStart; x <= xBlockEnd; x++) {
    for (let y = yBlockStart; y <= yBlockEnd; y++) {
      blocksInView.push({
        x,
        y,
      });
    }
  }

  // console.log('in view ', blocksInView);

  // console.log(blocksInView.map((s) => getBlockIndexes(s, blockSqrt)));

  const blockCache = useQueries({
    queries: blocks.map((block) => ({
      queryKey: [`x${block.x}`, `y${block.y}`],
      enabled: !!blocksInView.find((s) => s.x === block.x && s.y === block.y),
      queryFn: async () => {
        //fetch block with coordinates of block x and block y
        const coordinates = getBlockIndexes(block, blockSqrt);

        return getBlockAsync(coordinates);
      },
    })),
  });

  function findBlockCacheEntry(block: Block): UseQueryResult<GardenGroup<TData>[], unknown> {
    const index = blocks.findIndex((s) => s.x === block.x && s.y === block.y);
    if (index === -1) throw new Error('Invalid block index');
    return blockCache[index];
  }

  // console.log('cache', blockCache);

  const packageChild = customItemView ?? undefined;

  const handleExpand = useCallback(
    <T extends Record<PropertyKey, unknown>>(subGroup: GardenGroup<T>): void => {
      subGroup.isExpanded = !subGroup.isExpanded;

      refresh();
    },
    [refresh]
  );
  const highlightedColumn = useMemo(
    () =>
      highlightHorizontalColumn ? highlightHorizontalColumn(gardenKey.toString(), customGroupByKeys?.value) : undefined,
    [highlightHorizontalColumn, gardenKey, customGroupByKeys]
  );
  useLayoutEffect(() => {
    if (highlightedColumn) {
      const scrollIndex = garden.findIndex((column) => column.value === highlightedColumn);
      scrollIndex !== -1 && columnVirtualizer.scrollToIndex(scrollIndex, { align: 'center' });
    }
  }, [garden, columnVirtualizer.scrollToIndex, highlightedColumn]);

  return (
    <>
      <Debugger blockLength={blocks.length} inViewLength={blocksInView.length} />
      <Layout
        rowTotalSize={rowVirtualizer.totalSize}
        columnTotalSize={columnVirtualizer.totalSize}
        parentRef={parentRef}
        containerRef={containerRef}
        isScrolling={isScrolling}
      >
        <HeaderContainer highlightedColumn={highlightedColumn} columnVirtualizer={columnVirtualizer} />
        {columnVirtualizer.virtualItems.map((virtualColumn) => {
          const currentColumn = garden[virtualColumn.index];
          const columnItems = getGardenItems<TData>(currentColumn, true);

          return (
            <Fragment key={virtualColumn.index}>
              <GardenItemContainer
                rowVirtualizer={rowVirtualizer}
                getBlockCache={findBlockCacheEntry}
                items={columnItems}
                packageChild={packageChild}
                customSubGroup={customGroupView}
                handleExpand={handleExpand}
                itemWidth={width}
                handleOnClick={handleOnItemClick}
                parentRef={containerRef}
                virtualColumn={virtualColumn}
              />
            </Fragment>
          );
        })}
      </Layout>
    </>
  );
};

type DebuggerProps = {
  blockLength: number;
  inViewLength: number;
};
function Debugger({ blockLength, inViewLength }: DebuggerProps) {
  return (
    <div style={{ position: 'absolute', background: 'white', zIndex: 2 }}>
      <div>debug</div>
      <div>blocks {blockLength}</div>
      <div>blocks in view {inViewLength}</div>
    </div>
  );
}

type BlockArgs = {
  rowCount: number;
  blockSqrt: number;
  columnCount: number;
};

/**
 * Creates an array of blocks for the total size of the area
 */
function makeBlocks({ blockSqrt, columnCount, rowCount }: BlockArgs) {
  const blocks: Block[] = [];

  for (let i = 0; i < rowCount / blockSqrt; i++) {
    for (let j = 0; j < columnCount / blockSqrt; j++) {
      const block = {
        x: j,
        y: i,
      };
      blocks.push(block);
    }
  }
  return blocks;
}

/**
 * Get item indexes for block
 * @param b - Block to find indexes for
 * @param sqrt - Square root of block size
 */
function getBlockIndexes(b: Block, sqrt: number) {
  return {
    xStart: b.x * sqrt,
    xEnd: b.x * sqrt + sqrt - 1,
    yStart: b.y * sqrt,
    yEnd: b.y * sqrt + sqrt - 1,
  };
}

function getCoordinatesInView(xItems: VirtualItem[], yItems: VirtualItem[]) {
  /** Start index on the x-axis  */
  const xStart = xItems[0].index;
  /** End index on the x-axis  */
  const xEnd = xItems[xItems.length - 1].index;
  /** Start index on the y-axis  */
  const yStart = Math.min(...yItems.map((s) => s.index));
  /** End index on the y-axis  */
  const yEnd = Math.max(...yItems.map((s) => s.index));
  return {
    xStart,
    xEnd,
    yStart,
    yEnd,
  };
}
