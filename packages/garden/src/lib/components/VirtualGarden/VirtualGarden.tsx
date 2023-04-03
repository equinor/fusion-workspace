import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  GetSubgroupItemsArgs,
  GroupingKeys,
} from '../../types';
import { GardenItemContainer } from '../GardenItemContainer/GardenItemContainer';
import { HeaderContainer } from '../HeaderContainer/HeaderContainer';
import { Layout } from '../Layout/Layout';

import { UseQueryResult } from '@tanstack/react-query';
import { useBlockCache } from '../../hooks/useBlockCache';
import { getCoordinatesInView, makeBlocks } from '../../utils/gardenBlock';
import { useScrollToColumnStart } from '../../hooks/useScrollToColumnStart';
import { zip } from 'rxjs/operators';
import { ReactiveValue } from '../../classes/reactiveValue';

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
};

export type ExpandedWithRange = Expanded & { range: number[] };

const useExpandedSubGroups = (columnCount: number) => {
  const [expanded, setExpanded] = useState<ExpandedWithRange[][]>(new Array(columnCount).fill(0).map(() => []));

  const expandColumn = (columnIndex: number, item: Expanded) => {
    const expandedIndexes = expanded[columnIndex];
    const after = expandedIndexes.filter((s) => s.index > item.index);
    const before = expandedIndexes.filter((s) => !after.includes(s));

    const changes = after.map((s) => ({
      ...s,
      index: s.index + item.count,
      range: new Array(s.count).fill(0).map((_, i) => i + s.index + item.count + 1),
    }));

    const res = [
      ...before,
      { ...item, range: new Array(item.count).fill(0).map((_, i) => i + item.index + 1) },
      ...changes,
    ];

    setExpanded((s) => [...s.slice(0, columnIndex), res, ...s.slice(columnIndex + 1)]);
  };

  const collapseColumn = (columnIndex: number, subgroupName: string) => {
    const expandedIndexes = expanded[columnIndex];
    const targetIndex = expandedIndexes.findIndex((s) => s.name === subgroupName);
    if (targetIndex === -1) {
      throw new Error('This should never happen');
    }
    const actualItem = expandedIndexes[targetIndex];
    const changess = expandedIndexes.slice(targetIndex + 1).map((s) => ({
      ...s,
      index: s.index - actualItem.count,
      range: new Array(s.count).fill(0).map((_, i) => i + s.index - actualItem.count + 1),
    }));
    const res = [...expandedIndexes.slice(0, targetIndex), ...changess];
    setExpanded((s) => [...s.slice(0, columnIndex), res, ...s.slice(columnIndex + 1)]);
  };

  return {
    expandColumn,
    collapseColumn,
    expanded,
  };
};

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
  getSubgroupItems: (args: GetSubgroupItemsArgs, signal: AbortSignal) => Promise<TData[]>;
};

export const VirtualGarden = <
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>({
  width,
  handleOnItemClick,
  blockSize = 22_500,
  getBlockAsync,
  meta,
  getHeader,
  getSubgroupItems,
}: VirtualGardenProps<TData>): JSX.Element => {
  const { columnCount, columnStart, rowCount } = meta;

  const blockSqrt = Math.sqrt(blockSize); //√blockSize

  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    visuals: { rowHeight },
    customViews: { customGroupView, customItemView },
    grouping,
  } = useGardenContext<TData, TContext>();

  /**
   * Reset to block x,y when grouping changes
   * Necessary for it not to crash
   * Happens before columnStart scrolling
   */
  useResetScrollOnKeysChange(parentRef, grouping);

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

  useScrollToColumnStart(columnStart, columnVirtualizer);

  const packageChild = customItemView ?? undefined;

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
          const updateRowCount = (newVal: number) => patchCount(virtualColumn.index, newVal);

          const maxRowCount = columnheights[virtualColumn.index];

          return (
            <Fragment key={virtualColumn.key}>
              <GardenItemContainer
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

export function useResetScrollOnKeysChange<TData extends Record<PropertyKey, unknown>>(
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  grouping: ReactiveValue<GroupingKeys<TData>>
) {
  useLayoutEffect(() => {
    const unsub = grouping.onChange(() => {
      parentRef.current?.scrollTo({ left: 0, top: 0 });
    });
    return () => unsub();
  }, [parentRef]);
}

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
