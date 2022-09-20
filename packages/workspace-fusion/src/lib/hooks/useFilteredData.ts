import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<TData>({ dataService }: FusionMediator<TData>) {
	const [data, setData] = useState<TData[]>(dataService.filteredData ?? []);

	useEffect(() => {
		const unsubscribe = dataService.onFilterDataChange(setData);
		return unsubscribe;
	}, []);

	return data;
}
