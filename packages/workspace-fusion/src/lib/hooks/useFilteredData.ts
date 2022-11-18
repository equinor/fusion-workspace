import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ dataService }: FusionMediator<TData, TContext>) {
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
