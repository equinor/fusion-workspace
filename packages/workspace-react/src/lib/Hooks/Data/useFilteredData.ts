import { useEffect, useState } from 'react';
import { useWorkspaceController } from '../useWorkspaceController';

/**
 * Hook that lets you use filtered data from the controller as a state
 * @returns Filtered data as a state
 */
export function useFilteredData() {
    const { filteredData, onFilteredDataChanged } = useWorkspaceController();

    //TODO: fix data is updated before notifier is added but default data to usestate doesnt seem to work??
    const [data, setData] = useState(filteredData);

    useEffect(() => {
        const unSubscribe = onFilteredDataChanged((data) => {
            setData(data);
        }).unSubscribe;

        return () => {
            unSubscribe();
        };
    }, []);

    return data;
}
