import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<TData>({ dataService }: FusionMediator<TData>) {
	const [data, setData] = useState<TData[]>([]);

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
