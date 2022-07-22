import { MemoExoticComponent, useCallback } from 'react';
import { VirtualItem } from 'react-virtual';
import { GardenGroup, GardenGroups } from '../../Models/data';
import { CustomHeaderView } from '../../Models/gardenOptions';
import { ActionType } from './ExpandProvider';
import { Header, HeaderRoot } from './styles';
import { useExpand, useExpandDispatch } from './hooks';
import { getGardenItems } from './utils';
import styled from 'styled-components';
import { GardenItem } from './types/gardenItem';
import { tokens } from '@equinor/eds-tokens';

type HeaderContainerProps<T> = {
    columnVirtualizer: { virtualItems: VirtualItem[] };
    headerChild?: MemoExoticComponent<(args: CustomHeaderView<T>) => JSX.Element>;
    garden: GardenGroups<T>;
    highlightColumn: string | undefined;
    customDescription?: (item: T | GardenItem<T>) => string;
    groupByKey: string;
};
export const HeaderContainer = <T extends unknown>(props: HeaderContainerProps<T>): JSX.Element => {
    const {
        columnVirtualizer,
        garden,
        groupByKey,
        headerChild: HeaderChild,
        highlightColumn,
        customDescription,
    } = props;
    const expandColumn = useExpandDispatch();
    const expanded = useExpand();

    const handleHeaderClick = useCallback(
        (index: number, column: GardenGroup<T>) => {
            expandColumn({
                type: ActionType.EXPAND_COLUMN,
                index,
                key: column.value,
                descriptionData: getGardenItems(column),
                customDescription: customDescription,
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
                        onClick={() =>
                            handleHeaderClick(virtualColumn.index, garden[virtualColumn.index])
                        }
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
                                    expanded.expandedColumns?.[garden[virtualColumn.index].value]
                                        ?.isExpanded
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
