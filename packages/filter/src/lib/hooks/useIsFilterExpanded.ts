import { useFilterContext } from './useFilterContext';
import { useObservable } from 'rxjs-hooks';

export function useIsFilterExpanded() {
	const { getIsFilterExpanded, isFilterExpanded$ } = useFilterContext();
	const isExpanded = useObservable(() => isFilterExpanded$, getIsFilterExpanded());

	return isExpanded;
}
