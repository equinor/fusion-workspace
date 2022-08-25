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
import { GardenController } from '../../classes';

type VirtualHookReturn = Pick<ReturnType<typeof useVirtual>, 'virtualItems' | 'scrollToIndex'>;
type PackageContainerProps<T> = {
	virtualColumn: VirtualItem;
	rowVirtualizer: VirtualHookReturn;
	items: GardenItem<T>[] | null;
	packageChild?: React.MemoExoticComponent<(args: CustomItemView<T>) => JSX.Element>;
	customSubGroup?: React.MemoExoticComponent<(args: CustomGroupView<T>) => JSX.Element>;
	handleExpand: any;
	itemWidth?: number;
	handleOnClick: (item: T) => void;
	parentRef: MutableRefObject<HTMLDivElement | null>;
};
export const GardenItemContainer = <T,>(props: PackageContainerProps<T>): JSX.Element => {
	const {
		rowVirtualizer,
		handleOnClick,
		virtualColumn,
		handleExpand,
		parentRef,
		itemWidth,
		packageChild: PackageChild,
		items,
	} = props;

	const controller = useGardenContext();
	const {
		highlightedNode: { value: highlighted },
		clickEvents: { onClickGroup, onClickItem },
		grouping: {
			value: { horizontalGroupingAccessor, verticalGroupingKeys },
		},
		objectIdentifier,
	} = controller;

	const groups = useGardenGroups();

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
									data={item as GardenGroup<T>}
									onClick={() => handleExpand(item)}
									onSelect={(item) => onClickItem && onClickItem(item, controller)}
									onGroupeSelect={(group) => onClickGroup && onClickGroup(group, controller)}
									groupByKeys={[horizontalGroupingAccessor, ...verticalGroupingKeys]}
								/>
							) : (
								<StyledSubGroup onClick={() => handleExpand(item)} style={{ width: `${width}%` }}>
									<StyledSubGroupText>
										{item.value}
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
								controller={controller as GardenController<T>}
								data={item.item}
								onClick={() => {
									handleOnClick(item.item);
								}}
								columnExpanded={
									expand?.expandedColumns?.[groups[virtualColumn.index].value]?.isExpanded ?? false
								}
								depth={item?.itemDepth}
								width={itemWidth}
								isSelected={item.item[objectIdentifier] === highlighted}
								rowStart={virtualRow.start}
								columnStart={virtualColumn.start}
								parentRef={parentRef}
							/>
						) : (
							<DefaultGardenItem
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
