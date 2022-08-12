import { useState, useEffect } from 'react';
import { FusionWorkspaceController } from '../types/fusionController';

export function useFilteredData<TData, TError>(controller: FusionWorkspaceController<TData, TError>) {
	const [data, setData] = useState(controller.getFilteredData());

	useEffect(() => {
		const { unSubscribe } = controller.onFilteredDataChanged(setData);
		return unSubscribe;
	}, []);

	return data;
}
