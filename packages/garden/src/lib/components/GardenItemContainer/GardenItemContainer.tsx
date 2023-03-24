import { MutableRefObject, useEffect, useState } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';

import { useExpand, useGardenContext } from '../../hooks';
import { isSubGroup } from '../../utils';
import { StyledPackageRoot } from './gardenItemContainer.styles';
import { CustomGroupView, CustomItemView, GardenGroup, GardenItem } from '../../types';
import { useSelected } from '../../hooks/useSelected';
import { SkeletonPackage } from '../gardenSkeleton/GardenSkeleton';
import { UseQueryResult } from '@tanstack/react-query';
import { GardenBlock } from '../VirtualGarden';
import { tokens } from '@equinor/eds-tokens';

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
  handleExpand: any;
  itemWidth?: number;
  handleOnClick: (item: TData) => void;
  parentRef: MutableRefObject<HTMLDivElement | null>;
  getBlockCache: (i: GardenBlock) => UseQueryResult<GardenGroup<TData>[], unknown>;
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
    parentRef,
    itemWidth,
    packageChild: PackageChild,
  } = props;

  const controller = useGardenContext<TData, TExtendedFields, TCustomGroupByKeys, TContext>();
  const {
    visuals: { rowHeight = 40 },
    colorAssistMode$,
    getIdentifier,
  } = controller;

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
        /** Find current blocks xIndex */
        const blockXIndex = Math.floor(virtualColumn.index / blockSqrt);
        /** Find current blocks yIndex */
        const blockYIndex = Math.floor(virtualRow.index / blockSqrt);

        /** Get query entry for current block */
        const { isLoading, data, error, refetch } = getBlockCache({ x: blockXIndex, y: blockYIndex });

        if (isLoading) {
          /** Skeleton loading state */
          return (
            <StyledPackageRoot
              key={virtualRow.index}
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
              key={virtualRow.index}
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
        const group = data[virtualColumn.index % blockSqrt];

        /** Find item from group */
        const item = (() => {
          if (!!group?.items.length || !!group?.subGroups.length) {
            return !!group.items.length
              ? group.items[virtualRow.index % blockSqrt]
              : group.subGroups[virtualRow.index % blockSqrt];
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
            <PackageChild
              colorAssistMode={colorAssistMode}
              //TODO: fix
              columnExpanded={false}
              // TODO: fix
              controller={controller}
              data={item as TData}
              isSelected={selectedIds.includes(getIdentifier(item as TData))}
              onClick={() => {
                controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item as TData, controller);
              }}
              width={itemWidth}
              depth={0}
              rowStart={virtualRow.start}
              columnStart={virtualColumn.start}
              parentRef={parentRef}
            />
            {/* HACK: Ignore subgrouping for now */}
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
              
              <PackageChild
                colorAssistMode={colorAssistMode}
                columnExpanded={expand?.expandedColumns?.[groups[virtualColumn.index].value]?.isExpanded ?? false}
                controller={createGardenProp(controller)}
                data={item.item}
                isSelected={selectedIds.includes(getIdentifier(item.item))}
                onClick={() => {
                  controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item.item, controller);
                }}
                width={itemWidth}
                depth={item?.itemDepth}
                rowStart={virtualRow.start}
                columnStart={virtualColumn.start}
                parentRef={parentRef}
              />
            )} */}
          </StyledPackageRoot>
        );
      })}
    </>
  );
};
