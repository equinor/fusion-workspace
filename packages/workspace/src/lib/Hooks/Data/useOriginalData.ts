import { useState, useEffect } from 'react';
import { useWorkspaceController } from '../useWorkspaceController';

/**
 * Hook that lets you use original data from the controller as a state
 * @returns Original data as a state
 */
export function useOriginalData() {
    const { originalData, onOriginalDataChanged } = useWorkspaceController();
    const [data, setData] = useState(originalData);

    useEffect(() => {
        const unsub = onOriginalDataChanged((data) => {
            setData(data);
        }).unsub;

        return () => {
            unsub();
        };
    }, []);

    return data;
}
