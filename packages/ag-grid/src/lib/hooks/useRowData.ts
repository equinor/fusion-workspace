import { useEffect, useState } from 'react';
import { ProxyGrid } from '../classes';

export function useRowData<TData>(controller: ProxyGrid<TData>) {
	const [rowData, setRowData] = useState(controller.rowData);

	useEffect(() => {
		controller.subscribe('rowData', setRowData);
	}, [controller]);

	return rowData;
}
