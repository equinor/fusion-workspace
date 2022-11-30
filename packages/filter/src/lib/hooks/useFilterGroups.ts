import { useEffect, useState } from 'react';
import { FilterGroup } from '../types';
import { useFilterContext } from './useFilterContext';

/** Use filter groups as state */
export function useFilterGroups() {
	const { filterGroups$ } = useFilterContext();
	if (!filterGroups$.value) {
		throw new Error('No filter groups');
	}
	const [groups, setGroups] = useState<FilterGroup[]>(filterGroups$.value);

	useEffect(() => {
		const sub = filterGroups$.subscribe((values) => {
			if (values) {
				setGroups(values);
			}
		});
		return () => sub.unsubscribe();
	}, []);

	return groups;
}
