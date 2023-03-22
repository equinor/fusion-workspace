import { MutableRefObject, useEffect, useState } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';

import { useExpand, useGardenContext, useGardenGroups } from '../../hooks';
import { isSubGroup } from '../../utils';
import { StyledPackageRoot } from './gardenItemContainer.styles';
import { CustomGroupView, CustomItemView, GardenGroup, GardenItem } from '../../types';
import { useSelected } from '../../hooks/useSelected';
import { createGardenProp } from '../../utils/createGardenProp';
import { SkeletonPackage } from '../gardenSkeleton/GardenSkeleton';
import { UseQueryResult } from '@tanstack/react-query';
import { Block } from '../VirtualGarden';

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
  items: GardenItem<TData>[] | null;
  packageChild?: React.MemoExoticComponent<
    (args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TContext>) => JSX.Element
  >;
  customSubGroup?: React.MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>;
  handleExpand: any;
  itemWidth?: number;
  handleOnClick: (item: TData) => void;
  parentRef: MutableRefObject<HTMLDivElement | null>;
  getBlockCache: (i: Block) => UseQueryResult<GardenGroup<TData>[], unknown>;
};
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
    handleExpand,
    parentRef,
    itemWidth,
    packageChild: PackageChild,
    items,
  } = props;

  const controller = useGardenContext<TData, TExtendedFields, TCustomGroupByKeys, TContext>();
  const {
    clickEvents: { onClickGroup, onClickItem },
    grouping: {
      value: { horizontalGroupingAccessor, verticalGroupingKeys },
    },
    visuals: { rowHeight = 40 },
    colorAssistMode$,
    getIdentifier,
  } = controller;

  const groups = useGardenGroups();

  const selectedIds = useSelected();

  const expand = useExpand();

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
        //which block am i?

        // virtualColumn.index / virtualRow.index block
        // blockCache[]
        //TOOD: sqrt
        const blockXIndex = Math.floor(virtualColumn.index / blockSqrt);
        const blockYIndex = Math.floor(virtualRow.index / blockSqrt);

        // console.log(`block index ${xIndex} - ${yIndex}`);

        const { isLoading, data, error } = getBlockCache({ x: blockXIndex, y: blockYIndex });
        // console.log(`${blockXIndex} - i${virtualColumn.index}`, data);
        if (isLoading) {
          /** Skeleton loading state */
          return (
            <StyledPackageRoot
              key={virtualRow.index}
              style={{
                transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
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
              key={virtualRow.index}
              style={{
                transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
                width: `${virtualColumn.size}px`,
                height: `${virtualRow.size}px`,
              }}
            >
              <div>failed to load</div>
            </StyledPackageRoot>
          );
        }

        const group = data[virtualColumn.index % blockSqrt];

        const item = (() => {
          if (!!group?.items.length || !!group?.subGroups.length) {
            return !!group.items.length
              ? group.items[virtualRow.index % blockSqrt]
              : group.subGroups[virtualRow.index % blockSqrt];
          }
          return null;
        })();

        if (!item) {
          return null;
        }

        // const item = items?.[virtualRow.index];
        // console.log(item);

        return (
          <StyledPackageRoot
            key={virtualRow.index}
            style={{
              transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
              width: `${virtualColumn.size}px`,
              height: `${virtualRow.size}px`,
            }}
          >
            <div style={{ width: '300px', height: '34px' }}>{item['age'] as any}</div>
            {/* <SkeletonPackage width={300} height={34} /> */}
            {/* {isSubGroup(item) ? (
              <CustomSubGroup
                columnExpanded={item.isExpanded}
                data={item}
                onClick={() => handleExpand(item)}
                onSelect={(item) => onClickItem && onClickItem(item, controller)}
                onGroupeSelect={(group) => onClickGroup && onClickGroup(group, controller)}
                groupByKeys={[horizontalGroupingAccessor, ...verticalGroupingKeys]}
              />
            ) : (
              
              // <PackageChild
              //   colorAssistMode={colorAssistMode}
              //   columnExpanded={expand?.expandedColumns?.[groups[virtualColumn.index].value]?.isExpanded ?? false}
              //   controller={createGardenProp(controller)}
              //   data={item.item}
              //   isSelected={selectedIds.includes(getIdentifier(item.item))}
              //   onClick={() => {
              //     controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item.item, controller);
              //   }}
              //   width={itemWidth}
              //   depth={item?.itemDepth}
              //   rowStart={virtualRow.start}
              //   columnStart={virtualColumn.start}
              //   parentRef={parentRef}
              // />
            )} */}
          </StyledPackageRoot>
        );
      })}
    </>
  );
};
