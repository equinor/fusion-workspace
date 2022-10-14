import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<TData>({ dataService }: FusionMediator<TData>) {
	const [data, setData] = useState<TData[]>([]);

	useEffect(() => {
		const subscription = dataService.filteredData$.subscribe(({ newValue }) => {
			if (!newValue) return;
			setData(newValue);
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [dataService.filteredData$]);

	return data;
}
