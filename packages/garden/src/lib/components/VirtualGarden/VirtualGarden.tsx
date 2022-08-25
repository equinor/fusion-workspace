import { Fragment, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';

import { useExpand } from '../../hooks/useExpand';
import { useRefresh } from '../../hooks/useRefresh';
import { useVirtualScrolling } from '../../hooks/useVirtualScrolling';
import { CustomVirtualViews, GardenGroup } from '../../types';
import { defaultSortFunction } from '../../utils/defaultSortFunction';
import { getGardenItems } from '../../utils/getGardenItems';
import { getRowCount } from '../../utils/getRowCount';
import { useGardenContext } from '../Garden';
import { GardenItemContainer } from '../GardenItemContainer/GardenItemContainer';
import { HeaderContainer } from '../HeaderContainer/HeaderContainer';
import { Layout } from '../Layout/Layout';
import { useGardenGroups } from '../VirtualContainer/VirtualContainer';

type VirtualGardenProps<T> = {
	width?: number;
	handleOnItemClick: (item: T) => void;
};

export const VirtualGarden = <T,>({ width, handleOnItemClick }: VirtualGardenProps<T>): JSX.Element => {
	const parentRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const garden = useGardenGroups();
	const {
		fieldSettings,

		grouping: {
			value: { horizontalGroupingAccessor: gardenKey },
		},
		visuals: { rowHeight, highlightHorizontalColumn },
		customViews: { customGroupView, customHeaderView, customItemView },
		customGroupByKeys,
	} = useGardenContext();

	const refresh = useRefresh();

	const { isScrolling, scrollOffsetFn } = useVirtualScrolling(parentRef);
	const { widths: contextWidths } = useExpand();

	const columnCount = useMemo(() => garden.length, [garden]);
	const rowCount = useMemo(() => getRowCount(garden), [garden]);

	const sortedColumns = useMemo(
		() =>
			garden.sort((a, b) => (fieldSettings?.[gardenKey]?.getColumnSort ?? defaultSortFunction)(a.value, b.value)),
		[garden, fieldSettings, gardenKey]
	);

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
	const headerChild = customHeaderView ?? undefined;
	const packageChild = customItemView ?? undefined;

	const handleExpand = useCallback(
		<T,>(subGroup: GardenGroup<T>): void => {
			subGroup.isExpanded = !subGroup.isExpanded;

			refresh();
		},
		[refresh]
	);
	const highlightedColumn = useMemo(
		() =>
			highlightHorizontalColumn
				? highlightHorizontalColumn(gardenKey.toString(), customGroupByKeys?.value ?? {})
				: undefined,
		[highlightHorizontalColumn, gardenKey, customGroupByKeys]
	);
	useLayoutEffect(() => {
		if (highlightedColumn) {
			const scrollIndex = sortedColumns.findIndex((column) => column.value === highlightedColumn);
			scrollIndex !== -1 && columnVirtualizer.scrollToIndex(scrollIndex, { align: 'center' });
		}
	}, [sortedColumns, columnVirtualizer.scrollToIndex, highlightedColumn]);

	return (
		<Layout
			rowTotalSize={rowVirtualizer.totalSize}
			columnTotalSize={columnVirtualizer.totalSize}
			parentRef={parentRef}
			containerRef={containerRef}
			isScrolling={isScrolling}
		>
			<HeaderContainer columnVirtualizer={columnVirtualizer} />
			{columnVirtualizer.virtualItems.map((virtualColumn) => {
				const currentColumn = sortedColumns[virtualColumn.index];
				const columnItems = getGardenItems<T>(currentColumn as GardenGroup<T>, true);

				return (
					<Fragment key={virtualColumn.index}>
						<GardenItemContainer
							rowVirtualizer={rowVirtualizer}
							items={columnItems}
							packageChild={packageChild as CustomVirtualViews<T>['customItemView']}
							customSubGroup={customGroupView as CustomVirtualViews<T>['customGroupView']}
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
