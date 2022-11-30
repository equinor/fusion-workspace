import { useState, useEffect } from 'react';
import { useFilterContext } from './useFilterContext';

export const useIsActiveFilters = () => {
	const { currentFilterState$ } = useFilterContext();
	const [hasActiveFilters, setHasActiveFilters] = useState<boolean>(!!currentFilterState$.value?.length);

	useEffect(() => {
		const sub = currentFilterState$.subscribe((s) => setHasActiveFilters(!!s?.length));
		return () => sub.unsubscribe();
	}, []);

	return hasActiveFilters;
};
