import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

export const useFilterState = () => {
	const context = useFilterContext();
	if (!context.currentFilterState$.value) {
		throw new Error('Filter state undefined');
	}
	const [state, setState] = useState(context.currentFilterState$.value);

	useEffect(() => {
		const sub = context.currentFilterState$.subscribe((s) => {
			if (s) {
				setState([...s]);
			}
		});
		return () => sub.unsubscribe();
	}, []);

	return {
		setFilterState: context.setFilterState,
		filterState: state,
	};
};
