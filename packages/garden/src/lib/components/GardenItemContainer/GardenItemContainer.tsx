import { MutableRefObject, useEffect, useState } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';

import { useExpand, useGardenContext, useGroupingKeys } from '../../hooks';
import { isSubGroup } from '../../utils';
import { StyledPackageRoot } from './gardenItemContainer.styles';
import { CustomGroupView, CustomItemView, GardenGroup, GardenItem, GetSubgroupItemsArgs } from '../../types';
import { useSelected } from '../../hooks/useSelected';
import { SkeletonPackage } from '../gardenSkeleton/GardenSkeleton';
import { UseQueryResult } from '@tanstack/react-query';
import { Expanded, ExpandedWithRange, GardenBlock } from '../VirtualGarden';
import { tokens } from '@equinor/eds-tokens';
import { useBlockCache } from '../../hooks/useBlockCache';

type VirtualHookReturn = Pick<ReturnType<typeof useVirtual>, 'virtualItems' | 'scrollToIndex'>;
type PackageContainerProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
> = {
  virtualColumn: VirtualItem;
  blockSqrt: number;
  rowVirtualizer: VirtualHookReturn;
  packageChild?: React.MemoExoticComponent<
    (args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TContext>) => JSX.Element
  >;
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
  getSubGroupItems: (args: GetSubgroupItemsArgs, signal: AbortSignal) => Promise<TData[]>;
};

const createSubgroupBlockCache = ({ length, virtualColumnIndex }: { length: number; virtualColumnIndex: number }) =>
  new Array(length).fill(0).map((_, i) => ({ x: virtualColumnIndex, y: i }));

const getOpenSubGroups = (expandedIndexes: ExpandedWithRange[], virtualColumnIndex) =>
  expandedIndexes.map((s) => ({
    x: virtualColumnIndex,
    y: calculateActualIndex(expandedIndexes, s.index).actualIndex,
  }));

export const GardenItemContainer = <
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>(
  props: PackageContainerProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>
): JSX.Element => {
  const {
    rowVirtualizer,
    virtualColumn,
    getBlockCache,
    blockSqrt,
    maxRowCount,
    parentRef,
    itemWidth,
    collapseColumn,
    expandColumn,
    expandedIndexes,
    packageChild: PackageChild,
    setUpdatedRowCount,
    getSubGroupItems,
  } = props;

  const controller = useGardenContext<TData, TExtendedFields, TCustomGroupByKeys, TContext>();
  const {
    visuals: { rowHeight = 40 },
    colorAssistMode$,
    getIdentifier,
  } = controller;

  type SubGroupState = {
    index: number;
    subGroupName: string;
    columnName: string;
  };
  const [subGroupCount, setSubGroupCount] = useState<SubGroupState[]>([]);

  const selectedIds = useSelected();

  const expand = useExpand();

  const keys = useGroupingKeys();

  const queries = useBlockCache<TData[]>(
    createSubgroupBlockCache({ length: subGroupCount.length, virtualColumnIndex: virtualColumn.index }),
    getOpenSubGroups(expandedIndexes, virtualColumn.index),
    1,
    async (a, signal) => {
      /**
       *  Make fetch request to find subgroup items using the following parameters
       * groupingKeys: string[];
       * columnName: string;
       * subgroupName: string;
       *
       */

      const actualGroup = subGroupCount[a.rowStart];
      const actualIndex = a.rowStart;

      // ["DisciplineCode", "Responsible"],
      // const columnIndex = a.columnStart;
      // actualIndex;

      const { columnName, subGroupName } = actualGroup;
      return getSubGroupItems(
        {
          columnName: columnName,
          groupingKeys: [keys.gardenKey.toString(), ...keys.groupByKeys],
          subgroupName: subGroupName,
        },
        signal
      ) as any;
    },
    ['groupName']
  );

  const [colorAssistMode, setColorAssistMode] = useState<boolean>(colorAssistMode$.value);

  useEffect(() => {
    const sub = colorAssistMode$.subscribe(setColorAssistMode);
    return () => sub.unsubscribe();
  }, []);

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

        /** Find current blocks xIndex */
        const blockXIndex = Math.floor(virtualColumn.index / blockSqrt);
        /**
         *  Find current blocks yIndex
         */
        const calculatedIndex = calculateActualIndex(expandedIndexes, virtualRow.index);

        //offset using indexes
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
          const group = data[virtualColumn.index % blockSqrt];
          if (subGroupCount.length !== group.subGroupCount) {
            setSubGroupCount(
              new Array(group.subGroupCount).fill(0).map((_, i) => ({
                columnName: group.columnName,
                subGroupName: group.subGroups[i].columnName,
                index: i,
              }))
            );
          }
        }

        if (isLoading) {
          /** Skeleton loading state */
          return (
            <StyledPackageRoot
              key={virtualRow.key}
              style={{
                translate: `${virtualColumn.start}px ${virtualRow.start}px`,
                width: `${virtualColumn.size}px`,
                height: `${virtualRow.size}px`,
              }}
            >
              <SkeletonPackage height={rowHeight - 5} width={(itemWidth ?? 50) - 5} />
            </StyledPackageRoot>
          );
        }

        if (!data || error) {
          /** Error state */
          return (
            <StyledPackageRoot
              title="Click to retry"
              key={virtualRow.key}
              style={{
                translate: `${virtualColumn.start}px ${virtualRow.start}px`,
                width: `${virtualColumn.size}px`,
                height: `${virtualRow.size}px`,
                cursor: 'pointer',
              }}
              onClick={() => refetch()}
            >
              <div
                style={{
                  height: rowHeight - 5,
                  width: (itemWidth ?? 50) - 5,
                  background: tokens.colors.interactive.danger__resting.hex,
                  borderRadius: '5px',
                }}
              />
            </StyledPackageRoot>
          );
        }

        /** Index in data !== virtualColumn.index */
        const column = data[convertActualIndexToPaginatedIndex(virtualColumn.index, blockSqrt)];

        const flatIndex = calculatedIndex;

        if (flatIndex.isSubgroupItem) {
          const query = queries[calculateActualIndex(expandedIndexes, flatIndex.parent.index).actualIndex];
          return (
            <SubGroupItem
              key={virtualRow.key}
              PackageChild={PackageChild}
              itemIndex={flatIndex.actualIndex}
              itemWidth={itemWidth ?? 50}
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
            key={virtualRow.index}
            style={{
              translate: `${virtualColumn.start}px ${virtualRow.start}px`,
              width: `${virtualColumn.size}px`,
              height: `${virtualRow.size}px`,
              cursor: 'pointer',
            }}
          >
            {/* HACK: Ignore subgrouping for now */}
            {isSubGroup(item) ? (
              <CustomSubGroup
                columnExpanded={false}
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
                    /**add expanded column */
                    expandColumn({ index: virtualRow.index, count: item.totalItemsCount, name: item.columnName });
                    /**Update row count */
                    setUpdatedRowCount(
                      expandedIndexes.reduce((acc, curr) => acc + curr.count, 0) +
                        item.totalItemsCount +
                        column.subGroupCount
                    );
                  }
                }}
                // onSelect={(item) => onClickItem && onClickItem(item, controller)}
                // onGroupeSelect={(group) => onClickGroup && onClickGroup(group, controller)}
                groupByKeys={[keys.gardenKey, ...keys.groupByKeys]}
              />
            ) : (
              <PackageChild
                colorAssistMode={colorAssistMode}
                //TODO: fix
                columnExpanded={false}
                // TODO: fix
                controller={controller}
                data={item}
                isSelected={selectedIds.includes(getIdentifier(item))}
                onClick={() => {
                  controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item, controller);
                }}
                width={itemWidth}
                depth={0}
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

type SubGroupItemProps = {
  query: UseQueryResult<any[]>;
  virtualRow: any;
  virtualColumn: any;
  rowHeight: number;
  itemWidth: number;
  PackageChild: React.MemoExoticComponent<(args: CustomItemView<any, any, any, any>) => JSX.Element>;
  itemIndex: number;
  parentRef: MutableRefObject<HTMLDivElement | null>;
};

const SubGroupItem = ({
  query,
  virtualColumn,
  virtualRow,
  itemWidth,
  rowHeight,
  PackageChild,
  itemIndex,
  parentRef,
}: SubGroupItemProps) => {
  const { isLoading, error, data, refetch } = query;
  const controller = useGardenContext<any, any, any, any>();
  const { colorAssistMode$, getIdentifier } = controller;

  if (isLoading) {
    /** Skeleton loading state */
    return (
      <StyledPackageRoot
        key={virtualRow.key}
        style={{
          translate: `${virtualColumn.start}px ${virtualRow.start}px`,
          width: `${virtualColumn.size}px`,
          height: `${virtualRow.size}px`,
        }}
      >
        <SkeletonPackage height={rowHeight - 5} width={(itemWidth ?? 50) - 5} />
      </StyledPackageRoot>
    );
  }

  if (!data || error) {
    /** Error state */
    return (
      <StyledPackageRoot
        title="Click to retry"
        key={virtualRow.key}
        style={{
          translate: `${virtualColumn.start}px ${virtualRow.start}px`,
          width: `${virtualColumn.size}px`,
          height: `${virtualRow.size}px`,
          cursor: 'pointer',
        }}
        onClick={() => refetch()}
      >
        <div
          style={{
            height: rowHeight - 5,
            width: (itemWidth ?? 50) - 5,
            background: tokens.colors.interactive.danger__resting.hex,
            borderRadius: '5px',
          }}
        />
      </StyledPackageRoot>
    );
  }

  const item = data[itemIndex];

  return (
    <StyledPackageRoot
      key={virtualRow.index}
      style={{
        translate: `${virtualColumn.start}px ${virtualRow.start}px`,
        width: `${virtualColumn.size}px`,
        height: `${virtualRow.size}px`,
        cursor: 'pointer',
      }}
    >
      <PackageChild
        colorAssistMode={false}
        //TODO: fix
        columnExpanded={false}
        // TODO: fix
        controller={controller}
        data={item}
        isSelected={false}
        // isSelected={selectedIds.includes(getIdentifier(item))}
        onClick={() => {
          controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item, controller);
        }}
        width={itemWidth}
        depth={0}
        rowStart={virtualRow.start}
        columnStart={virtualColumn.start}
        parentRef={parentRef}
      />
    </StyledPackageRoot>
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
