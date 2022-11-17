import { MutableRefObject } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';

import { useExpand, useGardenContext, useGardenGroups } from '../../hooks';
import { isSubGroup } from '../../utils';
import { StyledPackageRoot } from './gardenItemContainer.styles';
import { CustomGroupView, CustomItemView, GardenGroup, GardenItem } from '../../types';
import { useSelected } from '../../hooks/useSelected';

type VirtualHookReturn = Pick<ReturnType<typeof useVirtual>, 'virtualItems' | 'scrollToIndex'>;
type PackageContainerProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
> = {
	virtualColumn: VirtualItem;
	rowVirtualizer: VirtualHookReturn;
	items: GardenItem<TData>[] | null;
	packageChild?: React.MemoExoticComponent<
		(args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) => JSX.Element
	>;
	customSubGroup?: React.MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>;
	handleExpand: any;
	itemWidth?: number;
	handleOnClick: (item: TData) => void;
	parentRef: MutableRefObject<HTMLDivElement | null>;
};
export const GardenItemContainer = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(
	props: PackageContainerProps<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
): JSX.Element => {
	const {
		rowVirtualizer,
		virtualColumn,
		handleExpand,
		parentRef,
		itemWidth,
		packageChild: PackageChild,
		items,
	} = props;

	const controller = useGardenContext();
	const {
		clickEvents: { onClickGroup, onClickItem },
		grouping: {
			value: { horizontalGroupingAccessor, verticalGroupingKeys },
		},
		getIdentifier,
	} = controller;

	const groups = useGardenGroups();

	const selectedIds = useSelected();

	const expand = useExpand();

	const CustomSubGroup = props?.customSubGroup;

	if (!PackageChild) throw new Error('No garden item registered');
	if (!CustomSubGroup) throw new Error('No garden group registered');

	return (
		<>
			{rowVirtualizer.virtualItems.map((virtualRow) => {
				const item = items?.[virtualRow.index];
				if (!item) return null;

				return (
					<StyledPackageRoot
						key={virtualRow.index}
						style={{
							transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
							width: `${virtualColumn.size}px`,
							height: `${virtualRow.size}px`,
						}}
					>
						{isSubGroup(item) ? (
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
								columnExpanded={
									expand?.expandedColumns?.[groups[virtualColumn.index].value]?.isExpanded ?? false
								}
								controller={controller as any}
								data={item.item}
								isSelected={selectedIds.includes(getIdentifier(item.item))}
								onClick={() => {
									controller.clickEvents.onClickItem &&
										controller.clickEvents.onClickItem(item.item, controller);
								}}
								width={itemWidth}
								depth={item?.itemDepth}
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
