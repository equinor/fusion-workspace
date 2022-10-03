import { useEffect, useState } from 'react';
import { ProxyGrid } from '../classes';

export function useRowData<TData extends object>(controller: ProxyGrid<TData>) {
	const [rowData, setRowData] = useState(controller.rowData);

	useEffect(() => {
		const unsub = controller.subscribe('rowData', setRowData);
		return unsub;
	}, [controller]);

	return rowData;
}
