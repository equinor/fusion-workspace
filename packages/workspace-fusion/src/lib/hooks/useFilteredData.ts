import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<TData extends Record<PropertyKey, unknown>>({ dataService }: FusionMediator<TData>) {
	const [data, setData] = useState<TData[]>(dataService.filteredData ?? []);

	useEffect(() => {
		const subscription = dataService.filteredData$.subscribe((newData) => {
			if (!newData) return;
			setData(newData);
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [dataService.filteredData$]);

	return data;
}
