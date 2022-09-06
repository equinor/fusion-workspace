import { GridApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { GridController } from '../classes';
import { useRowData } from './useRowData';

export function useSelectionService<TData>(controller: GridController<TData>, gridApi: GridApi<any> | undefined) {
	const rowData = useRowData(controller);

	useEffect(() => {
		const unsubscribe = controller.selectedNodes.onchange((val) => {
			if (!gridApi) return;
			selectRowNode(val, controller.getUniqueId, gridApi, rowData);
		});
		return unsubscribe;
	}, [controller, gridApi, rowData]);
}

export function selectRowNode<TData>(
	selectedNodes: string[],
	getUniqueId: (item: TData) => string,
	gridApi: GridApi,
	rowData: TData[]
) {
	const matches = selectedNodes.map((selectedId) => rowData.findIndex((item) => getUniqueId(item) === selectedId));

	const nodes = matches.map((index) => gridApi.getRowNode(index.toString()));
	/** Clear all previously selected, didnt find any better way to do this */
	gridApi.getRowNode('0')?.setSelected(false, true);
	/**Select all the new nodes */
	nodes.forEach((s) => s?.setSelected(true, false));
}
