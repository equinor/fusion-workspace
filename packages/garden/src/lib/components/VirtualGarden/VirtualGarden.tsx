import { Fragment, useCallback, useLayoutEffect, useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { useGardenContext } from '../../hooks';

import { useExpand } from '../../hooks/useExpand';
import { useRefresh } from '../../hooks/useRefresh';
import { useVirtualScrolling } from '../../hooks/useVirtualScrolling';
import {
  GardenGroup,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetHeaderBlockRequestArgs,
} from '../../types';
import { GardenItemContainer } from '../GardenItemContainer/GardenItemContainer';
import { HeaderContainer } from '../HeaderContainer/HeaderContainer';
import { Layout } from '../Layout/Layout';

import { UseQueryResult } from '@tanstack/react-query';
import { useBlockCache } from '../../hooks/useBlockCache';
import { getCoordinatesInView, makeBlocks } from '../../utils/gardenBlock';
import { useScrollToColumnStart } from '../../hooks/useScrollToColumnStart';

export type GardenBlock = {
  x: number;
  y: number;
};

type VirtualGardenProps<TData extends Record<PropertyKey, unknown>> = {
  width?: number;
  handleOnItemClick: (item: TData) => void;
  meta: GardenMeta;
  //Blocksize must be a number √blockSize === Integer
  blockSize?: number;
  getBlockAsync: (args: GetBlockRequestArgs, signal: AbortSignal) => Promise<GardenGroup<TData>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, signal: AbortSignal) => Promise<GardenHeaderGroup[]>;
};

export const VirtualGarden = <
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>({
  width,
  handleOnItemClick,
  blockSize = 2500,
  getBlockAsync,
  meta,
  getHeader,
}: VirtualGardenProps<TData>): JSX.Element => {
  const { columnCount, columnStart, rowCount } = meta;

  const blockSqrt = Math.sqrt(blockSize); //√blockSize

  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    visuals: { rowHeight },
    customViews: { customGroupView, customItemView },
  } = useGardenContext<TData, TExtendedFields, TCustomGroupByKeys, TContext>();

  const refresh = useRefresh();

  const { isScrolling } = useVirtualScrolling(parentRef);
  const { widths: contextWidths } = useExpand();

  const rowVirtualizer = useVirtual({
    size: rowCount,
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

  useScrollToColumnStart(columnStart, columnVirtualizer);

  const packageChild = customItemView ?? undefined;

  const handleExpand = useCallback(
    <T extends Record<PropertyKey, unknown>>(subGroup: GardenGroup<T>): void => {
      subGroup.isExpanded = !subGroup.isExpanded;

      refresh();
    },
    [refresh]
  );

  // const highlightedColumn = useMemo(
  //   () =>
  //     highlightHorizontalColumn ? highlightHorizontalColumn(gardenKey.toString(), customGroupByKeys?.value) : undefined,
  //   [highlightHorizontalColumn, gardenKey, customGroupByKeys]
  // );

  // useLayoutEffect(() => {
  //   if (highlightedColumn) {
  //     const scrollIndex = garden.findIndex((column) => column.value === highlightedColumn);
  //     scrollIndex !== -1 && columnVirtualizer.scrollToIndex(scrollIndex, { align: 'center' });
  //   }
  // }, [garden, columnVirtualizer.scrollToIndex, highlightedColumn]);

  const blocks = makeBlocks({ blockSqrt, columnCount, rowCount });
  const { xEnd, xStart, yEnd, yStart } = getCoordinatesInView(
    columnVirtualizer.virtualItems,
    rowVirtualizer.virtualItems
  );

  const blocksInView = getBlocksInView(xStart, xEnd, yStart, yEnd, blockSqrt);
  const blockCache = useBlockCache(blocks, blocksInView, blockSqrt, getBlockAsync, ['groups']);

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
          getHeader={getHeader}
          blockSqrt={blockSqrt}
          columnCount={columnCount}
          columnEnd={xEnd}
          columnStart={xStart}
          highlightedColumn={columnStart ?? undefined}
          columnVirtualizer={columnVirtualizer}
        />
        {columnVirtualizer.virtualItems.map((virtualColumn) => {
          // const currentColumn = garden[virtualColumn.index];
          // const columnItems = getGardenItems<TData>(currentColumn, true);

          return (
            <Fragment key={virtualColumn.index}>
              <GardenItemContainer
                blockSqrt={blockSqrt}
                rowVirtualizer={rowVirtualizer}
                getBlockCache={(currBlock) => findBlockCacheEntry(currBlock, blocks, blockCache)}
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

export function findBlockCacheEntry<T>(
  block: GardenBlock,
  blocks: GardenBlock[],
  blockCache: UseQueryResult<T, unknown>[]
): UseQueryResult<T, unknown> {
  const index = blocks.findIndex((s) => s.x === block.x && s.y === block.y);
  if (index === -1) throw new Error('Invalid block index');
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
