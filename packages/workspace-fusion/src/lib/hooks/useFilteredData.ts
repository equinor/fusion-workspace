import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<TData, TError>(mediator: FusionMediator<TData, TError>) {
	const [data, setData] = useState<TData[]>(mediator.filteredData ?? []);

	useEffect(() => {
		const unsubscribe = mediator.onFilterDataChange(setData);
		return unsubscribe;
	}, []);

	return data;
}
