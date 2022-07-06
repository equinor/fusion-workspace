import { useParkViewContext } from '../Context/ParkViewProvider';
import { Item } from '../Styles/item';

interface RenderItemsProps<T> {
    data: T[];
    columnExpanded: boolean;
}

export function Items<T>({ data, columnExpanded }: RenderItemsProps<T>): JSX.Element | null {
    const { itemKey, customView, status, onSelect, sortData, groupByKeys, gardenKey } =
        useParkViewContext<T>();

    const View = (customView as any)?.customItemView;
    const sortedData = sortData ? sortData(data, gardenKey, ...groupByKeys) : data;
    return (
        <>
            {Object.keys(sortedData).map((key, index) =>
                View ? (
                    <View
                        data={data[key]}
                        itemKey={itemKey.toString()}
                        key={data[key] + index}
                        onClick={() => onSelect(data[key])}
                        columnExpanded={columnExpanded}
                    />
                ) : (
                    <Item key={data[key] + index} onClick={() => onSelect(data[key])}>
                        {status?.statusItemFunc(data[key]).statusElement}
                        {data[key][itemKey]}
                    </Item>
                )
            )}
        </>
    );
}
