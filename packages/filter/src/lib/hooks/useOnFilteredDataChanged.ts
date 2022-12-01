import { useObservable } from 'rxjs-hooks';
import { useFilterContext } from './useFilterContext';

/** Hook for using filtered data from filter controller as state */
export function useOnFilteredDataChanged<TData>() {
	const { getFilteredData, filteredData$ } = useFilterContext();
	return useObservable(() => filteredData$, getFilteredData()) as TData[];
}
