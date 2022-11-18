import { Fragment, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { useGardenContext, useGardenGroups } from '../../hooks';

import { useExpand } from '../../hooks/useExpand';
import { useRefresh } from '../../hooks/useRefresh';
import { useVirtualScrolling } from '../../hooks/useVirtualScrolling';
import { CustomVirtualViews, GardenGroup } from '../../types';
import { getGardenItems } from '../../utils/getGardenItems';
import { getRowCount } from '../../utils/getRowCount';
import { GardenItemContainer } from '../GardenItemContainer/GardenItemContainer';
import { HeaderContainer } from '../HeaderContainer/HeaderContainer';
import { Layout } from '../Layout/Layout';

type VirtualGardenProps<TData extends Record<PropertyKey, unknown>> = {
	width?: number;
	handleOnItemClick: (item: TData) => void;
};

export const VirtualGarden = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>({
	width,
	handleOnItemClick,
}: VirtualGardenProps<TData>): JSX.Element => {
	const parentRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const garden = useGardenGroups();
	const {
		grouping: {
			value: { horizontalGroupingAccessor: gardenKey },
		},
		visuals: { rowHeight, highlightHorizontalColumn },
		customViews: { customGroupView, customItemView },
		customGroupByKeys,
	} = useGardenContext<TData, TExtendedFields, TCustomGroupByKeys, TContext>();

	const refresh = useRefresh();

	const { isScrolling, scrollOffsetFn } = useVirtualScrolling(parentRef);
	const { widths: contextWidths } = useExpand();

	const columnCount = useMemo(() => garden.length, [garden]);
	const rowCount = useMemo(() => getRowCount(garden), [garden]);

	const rowVirtualizer = useVirtual({
		size: rowCount,
		parentRef,
		estimateSize: useCallback(() => rowHeight || 40, [rowHeight]),
		paddingStart: 40,
		// overscan: 2,
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
		scrollOffsetFn,
		useObserver: useCallback(() => ({ height: 0, width: window.innerWidth }), []),
		overscan: 3,
	});

	const packageChild = customItemView ?? undefined;

	const handleExpand = useCallback(
		<T extends Record<PropertyKey, unknown>>(subGroup: GardenGroup<T>): void => {
			subGroup.isExpanded = !subGroup.isExpanded;

			refresh();
		},
		[refresh]
	);
	const highlightedColumn = useMemo(
		() =>
			highlightHorizontalColumn
				? highlightHorizontalColumn(gardenKey.toString(), customGroupByKeys?.value)
				: undefined,
		[highlightHorizontalColumn, gardenKey, customGroupByKeys]
	);
	useLayoutEffect(() => {
		if (highlightedColumn) {
			const scrollIndex = garden.findIndex((column) => column.value === highlightedColumn);
			scrollIndex !== -1 && columnVirtualizer.scrollToIndex(scrollIndex, { align: 'center' });
		}
	}, [garden, columnVirtualizer.scrollToIndex, highlightedColumn]);

	return (
		<Layout
			rowTotalSize={rowVirtualizer.totalSize}
			columnTotalSize={columnVirtualizer.totalSize}
			parentRef={parentRef}
			containerRef={containerRef}
			isScrolling={isScrolling}
		>
			<HeaderContainer highlightedColumn={highlightedColumn} columnVirtualizer={columnVirtualizer} />
			{columnVirtualizer.virtualItems.map((virtualColumn) => {
				const currentColumn = garden[virtualColumn.index];
				const columnItems = getGardenItems<TData>(currentColumn as GardenGroup<TData>, true);

				return (
					<Fragment key={virtualColumn.index}>
						<GardenItemContainer
							rowVirtualizer={rowVirtualizer}
							items={columnItems}
							packageChild={
								packageChild as CustomVirtualViews<
									TData,
									TExtendedFields,
									TCustomGroupByKeys,
									TContext
								>['customItemView']
							}
							customSubGroup={
								customGroupView as CustomVirtualViews<
									TData,
									TExtendedFields,
									TCustomGroupByKeys,
									TContext
								>['customGroupView']
							}
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
	);
};
