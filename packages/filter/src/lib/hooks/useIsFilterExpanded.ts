import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

export function useIsFilterExpanded() {
	const { filterExpanded$, getIsFilterExpanded } = useFilterContext();
	const [isExpanded, setIsExpanded] = useState(getIsFilterExpanded());

	useEffect(() => {
		const unsub = filterExpanded$.subscribe(setIsExpanded);
		return () => unsub.unsubscribe();
	}, []);

	return isExpanded;
}
