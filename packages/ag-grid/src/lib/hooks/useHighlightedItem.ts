import { GridApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { GridController } from '../classes';
import { useRowData } from './useRowData';

export function useHighlightService<TData>(controller: GridController<TData>, gridApi: GridApi<any> | undefined) {
	const rowData = useRowData(controller);

	useEffect(() => {
		const unsubscribe = controller.highlightedItem.onchange((val) => {
			if (!gridApi) return;
			selectRowNode(val, controller.objectIdentifier, gridApi, rowData);
		});
		return unsubscribe;
	}, [controller, gridApi, rowData]);
}

export function selectRowNode<TData>(
	highlighted: string | null | undefined,
	objectIdentifier: keyof TData,
	gridApi: GridApi,
	rowData: TData[]
) {
	const index = rowData.findIndex((s) => (s[objectIdentifier] as unknown as string) === highlighted);
	const node = gridApi.getRowNode(index.toString());
	if (!node) return;
	node.setSelected(true, true);
}
