import { useEffect, useState } from 'react';
import { FilterConfiguration, FilterGroup } from '../types';
import { useFilterContext } from './useFilterContext';

/** Use filter groups as state */
export function useFilterGroups<TData>() {
	const { onFilterValuesGenerated, groups } = useFilterContext();
	const [filterGroups, setGroups] = useState<FilterConfiguration<TData>[]>();

	useEffect(() => {
		const unsub = onFilterValuesGenerated(() => {
			setGroups(groups);
		});
		return unsub;
	}, []);

	return filterGroups;
}
