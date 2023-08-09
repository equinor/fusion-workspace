import { MutableRefObject, useRef, useState } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';

import { useExpand } from '../../hooks';
import { defaultItemColor, isSubGroup } from '../../utils';
import { StyledPackageRoot } from './gardenItemContainer.styles';
import { CustomGroupView, CustomItemView, GardenGroup, GetSubgroupItemsArgs } from '../../types';
import { UseQueryResult } from '@tanstack/react-query';
import { Expanded, ExpandedWithRange, GardenBlock } from '../VirtualGarden';
import { useBlockCache } from '../../hooks/useBlockCache';
import { ErrorPackage } from '../virtualPackages/ErrorPackage';
import { LoadingPackageSkeleton } from '../virtualPackages/LoadingPackage';
import { SubGroupItem } from '../defaultComponents/item/SubGroupItem';
import { useGarden } from '../../hooks/useGarden';
import { useGardenConfig } from '../../hooks/useGardenConfig';

type VirtualHookReturn = Pick<ReturnType<typeof useVirtual>, 'virtualItems' | 'scrollToIndex'>;
type PackageContainerProps<TData extends Record<PropertyKey, unknown>, TContext = undefined> = {
  virtualColumn: VirtualItem;
  blockSqrt: number;
  rowVirtualizer: VirtualHookReturn;
  packageChild?: React.MemoExoticComponent<(args: CustomItemView<TData>) => JSX.Element>;
  customSubGroup?: React.MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>;
  itemWidth?: number;
  handleOnClick: (item: TData) => void;
  parentRef: MutableRefObject<HTMLDivElement | null>;
  getBlockCache: (i: GardenBlock) => UseQueryResult<GardenGroup<TData>[], unknown>;
  setUpdatedRowCount: (a: number) => void;
  expandedIndexes: ExpandedWithRange[];
  collapseColumn: (subgroupName: string) => void;
  expandColumn: (item: Expanded) => void;
  maxRowCount: number;
  getSubGroupItems: (args: GetSubgroupItemsArgs, context: TContext, signal: AbortSignal) => Promise<TData[]>;
  context: TContext;
};

const createSubgroupBlockCache = ({ length, virtualColumnIndex }: { length: number; virtualColumnIndex: number }) =>
  new Array(length).fill(0).map((_, i) => ({ x: virtualColumnIndex, y: i }));

const getOpenSubGroups = (expandedIndexes: ExpandedWithRange[], virtualColumnIndex: number) =>
  expandedIndexes.map((s) => ({
    x: virtualColumnIndex,
    y: calculateActualIndex(expandedIndexes, s.index).actualIndex,
  }));

export const GardenItemContainer = <TData extends Record<PropertyKey, unknown>, TContext = undefined>(
  props: PackageContainerProps<TData, TContext>
): JSX.Element => {
  const {
    selectionService: { selection, selectNode },
  } = useGarden();

  const {
    rowVirtualizer,
    virtualColumn,
    getBlockCache,
    blockSqrt,
    maxRowCount,
    parentRef,
    itemWidth,
    collapseColumn,
    context,
    expandColumn,
    expandedIndexes,
    packageChild: PackageChild,
    setUpdatedRowCount,
    getSubGroupItems,
  } = props;

  const {
    visuals: { rowHeight = 40, getDescription = () => '', itemColor = defaultItemColor },
    onClickItem,
    getDisplayName,
    getIdentifier,
  } = useGardenConfig();

  const popoverRef = useRef<HTMLDivElement | null>(null);

  const [popoverItem, setPopoverItem] = useState<null | TData>(null);
  const hoverTimeout = useRef<number | null>(null);

  const [subGroupCount, setSubGroupCount] = useState<number>(0);

  const expand = useExpand();

  const isColumnExpanded = !!expand.expandedColumns.find((s) => s === virtualColumn.index);

  const {
    groupingService: { groupingKeys, dimension, type },
  } = useGarden();

  const queries = useBlockCache<TData[], TContext>({
    blocks: createSubgroupBlockCache({ length: subGroupCount, virtualColumnIndex: virtualColumn.index }),
    blocksInView: getOpenSubGroups(expandedIndexes, virtualColumn.index),
    blockSqrt: 1,
    context: context,
    hash: ['groupName'],
    getBlockAsync: async (args, context, signal) => {
      const { rowStart } = args;

      //Match index and find record in expandedIndexes
      const group = expandedIndexes.find(
        (s) => calculateActualIndex(expandedIndexes, s.index).actualIndex === rowStart
      );
      if (!group) {
        throw new Error('not found');
      }

      return getSubGroupItems(
        {
          columnName: group.columnName,
          groupingKeys: groupingKeys,
          dimension: dimension,
          type : type,
          subgroupName: group.name,
        },
        context,
        signal
        //TODO: fix signature
      ) as any;
    },
  });

  const CustomSubGroup = props?.customSubGroup;

  if (!PackageChild) throw new Error('No garden item registered');
  if (!CustomSubGroup) throw new Error('No garden group registered');

  return (
    <>
      {rowVirtualizer.virtualItems.map((virtualRow) => {
        /**If another column is expanded this might happen */
        if (virtualRow.index > maxRowCount) {
          return null;
        }

        //offset using indexes
        const calculatedIndex = calculateActualIndex(expandedIndexes, virtualRow.index);

        /** Find current blocks xIndex */
        const blockXIndex = Math.floor(virtualColumn.index / blockSqrt);
        /**
         *  Find current blocks yIndex
         */
        const blockYIndex = Math.floor(
          (calculatedIndex.isSubgroupItem
            ? calculateActualIndex(expandedIndexes, calculatedIndex.parent.index).actualIndex
            : calculatedIndex.actualIndex) / blockSqrt
        );

        /** Get query entry for current block */
        const { isLoading, data, error, refetch } = getBlockCache({ x: blockXIndex, y: blockYIndex });

        /**
         * Patch subgroups
         */
        if (data) {
          const group = data[convertActualIndexToPaginatedIndex(virtualColumn.index, blockSqrt)];
          if (subGroupCount !== group.subGroupCount) {
            setSubGroupCount(group.subGroupCount);
          }
        }

        if (isLoading) {
          /** Skeleton loading state */
          return (
            <LoadingPackageSkeleton
              key={virtualRow.key}
              itemWidth={itemWidth ?? 50}
              rowHeight={rowHeight}
              virtualColumn={virtualColumn}
              virtualRow={virtualRow}
            />
          );
        }

        if (!data || error) {
          /** Error state */
          return (
            <ErrorPackage
              key={virtualRow.key}
              itemWidth={itemWidth ?? 50}
              refetch={refetch}
              rowHeight={rowHeight}
              virtualColumn={virtualColumn}
              virtualRow={virtualRow}
            />
          );
        }

        /** Index in data !== virtualColumn.index */
        const column = data[convertActualIndexToPaginatedIndex(virtualColumn.index, blockSqrt)];

        const flatIndex = calculatedIndex;

        if (flatIndex.isSubgroupItem) {
          const query = queries[calculateActualIndex(expandedIndexes, flatIndex.parent.index).actualIndex];
          return (
            <SubGroupItem
              groupingKeys={groupingKeys}
              isExpanded={isColumnExpanded}
              key={virtualRow.key}
              PackageChild={PackageChild}
              itemIndex={flatIndex.actualIndex}
              itemWidth={itemWidth ?? 50}
              onClick={onClickItem}
              parentRef={parentRef}
              query={query}
              rowHeight={rowHeight}
              virtualColumn={virtualColumn}
              virtualRow={virtualRow}
            />
          );
        }

        /** Find item from group */
        const item = (() => {
          if (!!column?.items.length || !!column?.subGroups.length) {
            if (!!column.subGroups.length) {
              return column.subGroups[convertActualIndexToPaginatedIndex(flatIndex.actualIndex, blockSqrt)];
            }

            return !!column.items.length
              ? column.items[convertActualIndexToPaginatedIndex(flatIndex.actualIndex, blockSqrt)]
              : column.subGroups[convertActualIndexToPaginatedIndex(flatIndex.actualIndex, blockSqrt)];
          }
          return null;
        })();

        if (!item) {
          /** This can happen due to how blocks are calculated, best to just return null */
          return null;
        }

        return (
          <StyledPackageRoot
            ref={popoverRef}
            key={virtualRow.key}
            onMouseEnter={() => {
              hoverTimeout.current && clearTimeout(hoverTimeout.current);
              if (!isSubGroup(item)) {
                //??? node version differs? NodeJS.timeout vs number
                hoverTimeout.current = setTimeout(() => setPopoverItem(item), 700) as unknown as number;
              }
            }}
            onMouseLeave={() => {
              hoverTimeout.current && clearTimeout(hoverTimeout.current);
              setPopoverItem(null);
            }}
            style={{
              translate: `${virtualColumn.start}px ${virtualRow.start}px`,
              width: `${virtualColumn.size}px`,
              height: `${virtualRow.size}px`,
              cursor: 'pointer',
            }}
          >
            {isSubGroup(item) ? (
              <CustomSubGroup
                columnExpanded={isColumnExpanded}
                data={item}
                onClick={async () => {
                  const isAlreadyExpanded = !!expandedIndexes.find((s) => s.index === virtualRow.index);
                  if (isAlreadyExpanded) {
                    /**
                     * Sum all items count and subtract the one from the group you are collapsing
                     */
                    const newItemCount =
                      expandedIndexes.reduce((acc, curr) => acc + curr.count, 0) - item.totalItemsCount;

                    /**Set new row count to define the height of the virutal container */
                    setUpdatedRowCount(newItemCount + column.subGroupCount);
                    /** Collapse the column to adjust all the following indices */
                    collapseColumn(item.columnName);
                  } else {
                    const group = data[convertActualIndexToPaginatedIndex(virtualColumn.index, blockSqrt)];
                    /**add expanded column */
                    expandColumn({
                      index: virtualRow.index,
                      count: item.totalItemsCount,
                      name: item.columnName,
                      columnName: group.columnName,
                    });
                    /**Update row count */
                    setUpdatedRowCount(
                      expandedIndexes.reduce((acc, curr) => acc + curr.count, 0) +
                        item.totalItemsCount +
                        column.subGroupCount
                    );
                  }
                }}
                onSelect={onClickItem}
                groupByKeys={groupingKeys}
              />
            ) : (
              <PackageChild
                groupingKeys={groupingKeys}
                displayName={getDisplayName(item)}
                description={getDescription?.(item)}
                colorAssistMode={false}
                columnExpanded={isColumnExpanded}
                color={itemColor}
                data={item}
                isSelected={selection === getIdentifier(item)}
                onClick={() => {
                  onClickItem(item);
                }}
                width={itemWidth}
                depth={flatIndex.isSubgroupItem ? 1 : 0}
                rowStart={virtualRow.start}
                columnStart={virtualColumn.start}
                parentRef={parentRef}
              />
            )}
          </StyledPackageRoot>
        );
      })}
    </>
  );
};

const convertActualIndexToPaginatedIndex = (actualIndex: number, blockSqrt: number) => actualIndex % blockSqrt;

type ActualIndex =
  | {
      actualIndex: number;
      isSubgroupItem: false;
    }
  | {
      actualIndex: number;
      parent: ExpandedWithRange;
      isSubgroupItem: true;
    };

/**
 * If parent is returned its a subgroup item otherwise its a group or an item
 */
function calculateActualIndex(expandedIndices: ExpandedWithRange[], targetIndex: number): ActualIndex {
  // Find index of any parent
  const maybeParentIndex = expandedIndices.findIndex((expandedIndex) => expandedIndex.range.includes(targetIndex));

  //Parent is found
  if (maybeParentIndex !== -1) {
    return {
      /**Actual index of item would be the index of its place in the range array */
      actualIndex: expandedIndices[maybeParentIndex].range.findIndex((rangeIndex) => rangeIndex === targetIndex),
      parent: expandedIndices[maybeParentIndex],
      isSubgroupItem: true,
    };
  }

  /**
   * if i is not found inside any range, find a list of all ExpandedWithRange with a index + count lower than i
   * Then subtract count from i and return parent undefined.
   */
  const before = expandedIndices
    .filter((expandedIndex) => expandedIndex.index + expandedIndex.count < targetIndex)
    .reduce((acc, curr) => acc + curr.count, 0);
  return {
    actualIndex: targetIndex - before,
    isSubgroupItem: false,
  };
}
