import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useVirtual } from 'react-virtual';

import { useExpand } from '../../hooks/useExpand';
import { useVirtualScrolling } from '../../hooks/useVirtualScrolling';
import {
  GardenGroup,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetHeaderBlockRequestArgs,
  GetSubgroupItemsArgs,
} from '../../types';
import { GardenItemContainer } from '../GardenItemContainer/GardenItemContainer';
import { HeaderContainer } from '../HeaderContainer/HeaderContainer';
import { Layout } from '../Layout/Layout';

import { UseQueryResult } from '@tanstack/react-query';
import { useBlockCache } from '../../hooks/useBlockCache';
import { getCoordinatesInView, makeBlocks } from '../../utils/gardenBlock';
import { useScrollToColumnStart } from '../../hooks/useScrollToColumnStart';
import { useExpandedSubGroups } from '../../hooks/useExpandSubgroups';
import { useResetScrollOnKeysChange } from '../../hooks/useResetScrollOnKeysChange';
import { useGardenConfig } from '../../hooks/useGardenConfig';
import { useGarden } from '../../hooks/useGarden';

const makeHeights = (rowCount: number, columnCount: number) => new Array(columnCount).fill(0).map(() => rowCount);

const useColumnHeights = (rowCount: number, columnCount: number) => {
  const [columnheights, setColumnHeights] = useState(makeHeights(rowCount, columnCount));
  useEffect(() => setColumnHeights(makeHeights(rowCount, columnCount)), [rowCount, columnCount]);
  const patchCount = (i: number, newVal: number) =>
    setColumnHeights((h) => [...h.slice(0, i), newVal, ...h.slice(i + 1)]);
  return {
    patchCount,
    columnheights,
    setColumnHeights,
  };
};

export type Expanded = {
  index: number;
  count: number;
  name: string;
  columnName: string;
};

export type ExpandedWithRange = Expanded & { range: number[] };

export type GardenBlock = {
  x: number;
  y: number;
};

type VirtualGardenProps<TData extends Record<PropertyKey, unknown>, TContext> = {
  width?: number;
  handleOnItemClick: (item: TData) => void;
  meta: GardenMeta;
  //Blocksize must be a number √blockSize === Integer
  blockSize?: number;
  getBlockAsync: (args: GetBlockRequestArgs, context: TContext, signal: AbortSignal) => Promise<GardenGroup<TData>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, context: TContext, signal: AbortSignal) => Promise<GardenHeaderGroup[]>;
  getSubgroupItems: (args: GetSubgroupItemsArgs, context: TContext, signal: AbortSignal) => Promise<TData[]>;
  context: TContext;
};

export const VirtualGarden = <TData extends Record<PropertyKey, unknown>, TContext>({
  width,
  handleOnItemClick,
  blockSize = 40_000,
  getBlockAsync,
  meta,
  context,
  getHeader,
  getSubgroupItems,
}: VirtualGardenProps<TData, TContext>): JSX.Element => {
  const { columnCount, columnStart, rowCount } = meta;

  const blockSqrt = Math.sqrt(blockSize); //√blockSize

  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    visuals: { rowHeight },
    components: { customGroupView, customItemView },
  } = useGardenConfig();

  const { groupingService } = useGarden();

  /**
   * Reset to block x,y when grouping changes
   * Necessary for it not to crash
   * Happens before columnStart scrolling
   */
  useResetScrollOnKeysChange(parentRef, groupingService.groupingKeys);

  const { isScrolling } = useVirtualScrolling(parentRef);
  const { widths: contextWidths } = useExpand();

  /** Calculates a running count of the total height of each column */
  const { columnheights, patchCount } = useColumnHeights(rowCount, columnCount);

  const rowVirtualizer = useVirtual({
    size: Math.max(...columnheights),
    parentRef,
    estimateSize: useCallback(() => rowHeight || 40, [rowHeight]),
    paddingStart: 40,
    overscan: 15,
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
    useObserver: useCallback(() => ({ height: 0, width: window.innerWidth }), []),
    overscan: 3,
  });

  const { collapseColumn, expandColumn, expanded } = useExpandedSubGroups(columnCount);

  useScrollToColumnStart(columnStart, columnVirtualizer, groupingService.groupingKeys);

  const packageChild = customItemView ?? undefined;

  const blocks = makeBlocks({ blockSqrt, columnCount, rowCount });
  const { xEnd, xStart, yEnd, yStart } = getCoordinatesInView(
    columnVirtualizer.virtualItems,
    rowVirtualizer.virtualItems
  );

  const blocksInView = getBlocksInView(xStart, xEnd, yStart, yEnd, blockSqrt);
  const blockCache = useBlockCache({
    blocks,
    blocksInView,
    blockSqrt,
    context,
    getBlockAsync,
    hash: ['groups'],
  });

  return (
    <>
      <Layout
        rowTotalSize={rowVirtualizer.totalSize}
        columnTotalSize={columnVirtualizer.totalSize}
        parentRef={parentRef}
        containerRef={containerRef}
        isScrolling={isScrolling}
      >
        <HeaderContainer
          context={context}
          getHeader={getHeader}
          blockSqrt={blockSqrt}
          columnCount={columnCount}
          columnEnd={xEnd}
          columnStart={xStart}
          highlightedColumn={columnStart ?? undefined}
          columnVirtualizer={columnVirtualizer}
        />
        {columnVirtualizer.virtualItems.map((virtualColumn) => {
          const updateRowCount = (newVal: number) => patchCount(virtualColumn.index, newVal);

          const maxRowCount = columnheights[virtualColumn.index];

          return (
            <Fragment key={virtualColumn.key}>
              <GardenItemContainer
                context={context}
                getSubGroupItems={getSubgroupItems}
                maxRowCount={maxRowCount}
                collapseColumn={(name) => collapseColumn(virtualColumn.index, name)}
                expandColumn={(item) => expandColumn(virtualColumn.index, item)}
                expandedIndexes={expanded[virtualColumn.index]}
                setUpdatedRowCount={updateRowCount}
                blockSqrt={blockSqrt}
                rowVirtualizer={rowVirtualizer}
                getBlockCache={(currBlock) => findBlockCacheEntry(currBlock, blocks, blockCache)}
                packageChild={packageChild}
                customSubGroup={customGroupView}
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

export function findBlockCacheEntry<T>(
  block: GardenBlock,
  blocks: GardenBlock[],
  blockCache: UseQueryResult<T, unknown>[]
): UseQueryResult<T, unknown> {
  const index = blocks.findIndex((s) => s.x === block.x && s.y === block.y);

  if (index === -1) throw new Error(`Invalid block index; x:${block.x}, y: ${block.y}`);
  return blockCache[index];
}

/** Converts indexes to an array of blocks in view */
export function getBlocksInView(xStart: number, xEnd: number, yStart: number, yEnd: number, blockSqrt: number) {
  const xBlockStart = Math.floor(xStart / blockSqrt);
  const xBlockEnd = Math.floor(xEnd / blockSqrt);
  const yBlockStart = Math.floor(yStart / blockSqrt);
  const yBlockEnd = Math.floor(yEnd / blockSqrt);

  const blocksInView: GardenBlock[] = [];
  for (let x = xBlockStart; x <= xBlockEnd; x++) {
    for (let y = yBlockStart; y <= yBlockEnd; y++) {
      blocksInView.push({
        x,
        y,
      });
    }
  }
  return blocksInView;
}
