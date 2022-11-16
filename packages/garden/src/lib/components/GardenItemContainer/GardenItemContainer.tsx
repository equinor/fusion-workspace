import { MutableRefObject } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';

import { useExpand, useGardenContext, useGardenGroups } from '../../hooks';
import { isSubGroup } from '../../utils';
import { StyledCount, StyledPackageRoot } from './gardenItemContainer.styles';
import { DefaultGardenItem } from '../DefaultGardenItem/DefaultGardenItem';
import { CustomGroupView, CustomItemView, GardenGroup, GardenItem } from '../../types';
import { StyledSubGroup, StyledSubGroupText } from '../SubGroup/subGroup.styles';
import { tokens } from '@equinor/eds-tokens';
import { Icon } from '@equinor/eds-core-react';
import { useSelected } from '../../hooks/useSelected';
import { createGardenProp } from 'lib/utils/createGardenProp';
import { GardenProp } from '../../types/gardenProp';

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
	return (
		<>
			{rowVirtualizer.virtualItems.map((virtualRow) => {
				const item = items?.[virtualRow.index];
				if (!item) return null;

				const width = isSubGroup(item) ? 100 - item.depth * 3 : 100;

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
							CustomSubGroup ? (
								<CustomSubGroup
									columnExpanded={item.isExpanded}
									data={item as GardenGroup<TData>}
									onClick={() => handleExpand(item)}
									onSelect={(item) => onClickItem && onClickItem(item, controller)}
									onGroupeSelect={(group) => onClickGroup && onClickGroup(group, controller)}
									groupByKeys={[horizontalGroupingAccessor, ...verticalGroupingKeys]}
								/>
							) : (
								<StyledSubGroup onClick={() => handleExpand(item)} style={{ width: `${width}%` }}>
									<StyledSubGroupText>
										<div
											onClick={() =>
												onClickGroup &&
												onClickGroup(
													item as GardenGroup<Record<PropertyKey, unknown>>,
													controller
												)
											}
										>
											{item.value}
										</div>
										{item.description && ' - ' + item.description}
										<StyledCount>({item.count})</StyledCount>
									</StyledSubGroupText>
									<Icon
										name={item.isExpanded ? 'chevron_up' : 'chevron_down'}
										color={tokens.colors.interactive.primary__resting.hex}
									/>
								</StyledSubGroup>
							)
						) : PackageChild ? (
							<PackageChild
								columnExpanded={
									expand?.expandedColumns?.[groups[virtualColumn.index].value]?.isExpanded ?? false
								}
								controller={
									createGardenProp(controller) as GardenProp<
										TData,
										TExtendedFields,
										TCustomGroupByKeys,
										TCustomState,
										TContext
									>
								}
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
						) : (
							<DefaultGardenItem
								isSelected={selectedIds.includes(getIdentifier(item.item))}
								depth={item.itemDepth}
								columnExpanded={
									expand?.expandedColumns?.[groups[virtualColumn.index].value]?.isExpanded ?? false
								}
								item={item.item as unknown as Record<string, string>}
							/>
						)}
					</StyledPackageRoot>
				);
			})}
		</>
	);
};
