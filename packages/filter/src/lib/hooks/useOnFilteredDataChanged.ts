import { useEffect, useState } from 'react';
import { OnCallbackSet, OnFilterDataChangeCallback } from '../classes';

export function useOnFilteredDataChanged<T>(
    onFilterDataChange: (cb: OnFilterDataChangeCallback<T>) => OnCallbackSet,
    initialData: T[]
) {
    const [val, setVal] = useState<T[]>(initialData);

    useEffect(() => {
        const { unSubscribe } = onFilterDataChange((data) => setVal(data));
        return () => {
            unSubscribe();
        };
    }, [onFilterDataChange]);

    return val;
}
