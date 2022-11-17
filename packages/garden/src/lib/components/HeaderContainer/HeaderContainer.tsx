import { useCallback } from 'react';
import { VirtualItem } from 'react-virtual';
import { ActionType } from '../ExpandProvider';
import { Header, HeaderRoot } from './headerContainer.styles';
import { useExpand, useExpandDispatch } from '../../hooks/useExpand';
import { getGardenItems } from '../../utils/getGardenItems';
import { GardenGroup } from '../../types';
import { useGardenContext, useGardenGroups } from '../../hooks';

type HeaderContainerProps = {
	columnVirtualizer: { virtualItems: VirtualItem[] };
	highlightedColumn: string | undefined;
};
export const HeaderContainer = ({ columnVirtualizer, highlightedColumn }: HeaderContainerProps): JSX.Element => {
	const garden = useGardenGroups();

	const controller = useGardenContext();
	const {
		visuals: { getDescription = () => '' },
		customViews: { customHeaderView: HeaderChild },

		grouping: {
			value: { horizontalGroupingAccessor: groupByKey },
		},
	} = controller;

	const expandColumn = useExpandDispatch();
	const expanded = useExpand();

	const handleHeaderClick = useCallback(
		(index: number, column: GardenGroup<Record<PropertyKey, unknown>>) => {
			expandColumn({
				type: ActionType.EXPAND_COLUMN,
				index,
				key: column.value,
				descriptionData: getGardenItems(column),
				customDescription: (item) => getDescription(item),
			});
		},
		[expandColumn, getGardenItems]
	);

	if (!HeaderChild) throw new Error('No header component registered');

	return (
		<HeaderRoot>
			{columnVirtualizer.virtualItems.map((virtualColumn) => {
				const isHighlighted = highlightedColumn === garden[virtualColumn.index].value;
				return (
					<Header
						onClick={() => handleHeaderClick(virtualColumn.index, garden[virtualColumn.index])}
						style={{
							width: `${virtualColumn.size}px`,
							transform: `translateX(${virtualColumn.start}px) translateY(0px)`,
							backgroundColor: isHighlighted ? '#007079' : '#f7f7f7',
							color: isHighlighted ? 'white' : 'black',
						}}
						key={virtualColumn.index}
					>
						<HeaderChild
							garden={garden}
							columnIndex={virtualColumn.index}
							columnIsExpanded={expanded.expandedColumns?.[garden[virtualColumn.index].value]?.isExpanded}
							groupByKey={groupByKey as string}
						/>
					</Header>
				);
			})}
		</HeaderRoot>
	);
};
