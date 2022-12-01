import { useFilterContext } from './useFilterContext';
import { useObservable } from 'rxjs-hooks';

/** Use filter groups as state */
export function useFilterGroups() {
	const { filterValues$, getFilterValues } = useFilterContext();
	const groups = useObservable(() => filterValues$, getFilterValues());

	return groups;
}
