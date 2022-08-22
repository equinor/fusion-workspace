import { useState, useEffect } from 'react';
import { FusionWorkspaceController } from '../types/fusionController';

export function useFilteredData<TData, TError>(mediator: FusionWorkspaceController<TData, TError>) {
	const [data, setData] = useState<TData[]>(mediator.filteredData.value ?? []);

	useEffect(() => {
		const unsubscribe = mediator.filteredData.onchange(setData);
		return unsubscribe;
	}, []);

	return data;
}
