import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

export function useIsFilterExpanded() {
	const { getIsFilterExpanded, isFilterExpanded$ } = useFilterContext();
	const [isExpanded, setIsExpanded] = useState<boolean>(getIsFilterExpanded());

	useEffect(() => {
		const sub = isFilterExpanded$.subscribe(setIsExpanded);
		return () => sub.unsubscribe();
	}, []);

	return isExpanded;
}
