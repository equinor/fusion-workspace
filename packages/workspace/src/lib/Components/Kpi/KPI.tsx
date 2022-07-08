import { useFilteredData, useOriginalData } from '../../Hooks';

export function KPI() {
    const originalData = useOriginalData();
    const filteredData = useFilteredData();

    return (
        <div>
            <div>Data length: {originalData.length}</div>
            <div>Filtered data length: {filteredData.length}</div>
        </div>
    );
}
