import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

/** Hook for using filtered data from filter controller as state */
export function useOnFilteredDataChanged() {
	const { getFilteredData, filteredData$ } = useFilterContext();
	const [data, setData] = useState(getFilteredData());

	useEffect(() => {
		const unsub = filteredData$.subscribe(setData);
		return () => unsub.unsubscribe();
	}, []);

	return data;
}
