import { useFilteredData, useOriginalData } from '../../Hooks';

/**
 * Status bar header component
 * @returns
 */
export function StatusBar() {
    const originalData = useOriginalData();
    const filteredData = useFilteredData();

    console.log(filteredData);

    return (
        <div>
            <div>Data length: {originalData.length}</div>
            <div>Filtered data length: {filteredData.length}</div>
        </div>
    );
}
