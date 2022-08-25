import { useCallback } from 'react';
import { VirtualItem } from 'react-virtual';
import { ActionType } from '../ExpandProvider';
import { Header, HeaderRoot } from './headerContainer.styles';
import { useExpand, useExpandDispatch } from '../../hooks/useExpand';
import { getGardenItems } from '../../utils/getGardenItems';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';
import { GardenGroup } from '../../types';
import { useGardenContext, useGardenGroups } from '../../hooks';

type HeaderContainerProps = {
	columnVirtualizer: { virtualItems: VirtualItem[] };
};
export const HeaderContainer = (props: HeaderContainerProps): JSX.Element => {
	const garden = useGardenGroups();

	const controller = useGardenContext();
	const {
		visuals: { getCustomDescription = () => '' },
		customViews: { customHeaderView: HeaderChild },
		highlightedNode: { value: highlightColumn },
		grouping: {
			value: { horizontalGroupingAccessor: groupByKey },
		},
	} = controller;

	const { columnVirtualizer } = props;
	const expandColumn = useExpandDispatch();
	const expanded = useExpand();

	const handleHeaderClick = useCallback(
		(index: number, column: GardenGroup<unknown>) => {
			expandColumn({
				type: ActionType.EXPAND_COLUMN,
				index,
				key: column.value,
				descriptionData: getGardenItems(column),
				customDescription: (item) => getCustomDescription(item, controller),
			});
		},
		[expandColumn, getGardenItems]
	);
	return (
		<HeaderRoot>
			{columnVirtualizer.virtualItems.map((virtualColumn) => {
				const isHighlighted = highlightColumn === garden[virtualColumn.index].value;
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
						{HeaderChild ? (
							<HeaderChild
								garden={garden}
								columnIndex={virtualColumn.index}
								columnIsExpanded={
									expanded.expandedColumns?.[garden[virtualColumn.index].value]?.isExpanded
								}
								groupByKey={groupByKey}
							/>
						) : (
							<>
								{garden[virtualColumn.index].value}
								<Count>({garden[virtualColumn.index].count})</Count>
							</>
						)}
					</Header>
				);
			})}
		</HeaderRoot>
	);
};

export const Count = styled.span`
	color: ${tokens.colors.text.static_icons__default.hex};
	font-weight: 300;
	font-size: 0.8rem;
	margin-left: 0.8em;
`;
