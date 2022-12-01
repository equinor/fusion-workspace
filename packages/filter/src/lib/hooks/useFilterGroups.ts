import { useEffect, useState } from 'react';
import { FilterGroup } from '../types';
import { useFilterContext } from './useFilterContext';

/** Use filter groups as state */
export function useFilterGroups() {
	const { filterValues$, getFilterValues } = useFilterContext();
	const [groups, setGroups] = useState<FilterGroup[]>(getFilterValues());

	useEffect(() => {
		const unsub = filterValues$.subscribe((values) => {
			setGroups(values);
		});
		return () => unsub.unsubscribe();
	}, []);

	return groups;
}
