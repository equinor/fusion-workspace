import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParkViewContext } from '../../Context/ParkViewProvider';
import { FilterSelector } from '../GroupingSelector';
import { ExpandProvider } from './ExpandProvider';
import { Container } from './styles';
import { VirtualGarden } from './VirtualGarden';



export const VirtualContainer = <T,>(): JSX.Element | null => {
    const [widths, setWidths] = useState<number[]>([]);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const controller = useParkViewContext<T>();
    const {
        grouping: {horizontalGroupingAccessor},
        groups,
        customGroupByKeys,
        clickEvents,
        visuals,
        objectIdentifier
    } = controller;

    const handleOnItemClick = useCallback((item: T) => {
        setSelectedItem(item[objectIdentifier] as unknown as string);
        clickEvents.onClickItem && clickEvents.onClickItem(item, controller)
    }, [visuals?.calculateItemWidth, controller]);



    const amountOfColumns = useMemo(() => groups.length, [groups]);

    useEffect(() => {
        if (groups && amountOfColumns > 0) {
            const width =
                (visuals?.calculateItemWidth && visuals?.calculateItemWidth(groups as any, horizontalGroupingAccessor.toString(), customGroupByKeys)) || 300;
            setWidths(new Array(amountOfColumns).fill(width));
        }
    }, [amountOfColumns, horizontalGroupingAccessor, visuals?.calculateItemWidth]);

    //TODO: Handle widths = 0 better
    if (widths.length === 0 || amountOfColumns !== widths.length) {
        return null;
    }

    if (widths.length !== amountOfColumns) {
        return null;
    }

    return (
        <Container>
            <FilterSelector />
            <ExpandProvider initialWidths={widths}>
                <VirtualGarden
                    garden={groups as any}
                    width={visuals?.calculateItemWidth && visuals?.calculateItemWidth(groups as any, horizontalGroupingAccessor.toString())}
                    handleOnItemClick={handleOnItemClick}
                    selectedItem={selectedItem}
                />
            </ExpandProvider>
        </Container>
    );
};
