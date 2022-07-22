import { useEffect, useState } from 'react';
import { useWorkspaceController } from '../useWorkspaceController';

/**
 * Hook that lets you use original data from the controller as a state
 * @returns Original data as a state
 */
export function useOriginalData() {
    const { data: originalData, onDataChanged: onOriginalDataChanged } = useWorkspaceController();
    const [data, setData] = useState(originalData);

    useEffect(() => {
        const unSubscribe = onOriginalDataChanged((data) => {
            setData(data);
        }).unSubscribe;

        return () => {
            unSubscribe();
        };
    }, []);

    return data;
}
