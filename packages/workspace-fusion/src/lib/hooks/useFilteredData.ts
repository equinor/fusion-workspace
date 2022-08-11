import { useState, useEffect } from 'react';
import { FusionWorkspaceController } from '../types/fusionController';

export function useFilteredData<TData, TError, TContext>(
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	const [data, setData] = useState(controller.getFilteredData());

	useEffect(() => {
		const { unSubscribe } = controller.onFilteredDataChanged(setData);
		return unSubscribe;
	}, []);

	return data;
}
