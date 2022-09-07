import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<TData, TError>({ dataService }: FusionMediator<TData, TError>) {
	const [data, setData] = useState<TData[]>(dataService.filteredData ?? []);

	useEffect(() => {
		const unsubscribe = dataService.onFilterDataChange(setData);
		return unsubscribe;
	}, []);

	return data;
}
