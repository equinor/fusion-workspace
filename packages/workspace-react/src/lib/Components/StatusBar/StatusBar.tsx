import { useFilteredData, useOriginalData } from '../../Hooks';

/**
 * Status bar header component
 * @returns
 */
export function StatusBar() {
    const data = useOriginalData();
    const filteredData = useFilteredData();

    return (
        <div>
            <div>Data length: {data.length}</div>
            <div>Filtered data length: {filteredData.length}</div>
        </div>
    );
}
