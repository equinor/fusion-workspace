import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

/** Hook for using filtered data from filter controller as state */
export function useOnFilteredDataChanged() {
	const { filteredData$ } = useFilterContext();
	const [data, setData] = useState(filteredData$.value);

	useEffect(() => {
		const sub = filteredData$.subscribe(setData);
		return () => sub.unsubscribe();
	}, []);

	return data;
}
