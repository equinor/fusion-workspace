import { GridApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { GetIdentifier, GridController } from '../types';
import { useRowData } from './useRowData';

export function useSelectionService<TData extends Record<PropertyKey, unknown>>(
	controller: GridController<TData>,
	gridApi: GridApi<any> | undefined
) {
	const rowData = useRowData(controller);

	useEffect(() => {
		const subscription = controller.selectedNodes$.subscribe((val) => {
			if (!gridApi) return;
			selectRowNode(val, controller.getIdentifier, gridApi, rowData);
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [controller, gridApi, rowData]);
}

export function selectRowNode<TData>(
	selectedNodes: string[],
	getIdentifer: GetIdentifier<TData>,
	gridApi: GridApi,
	rowData: TData[]
) {
	const matches = selectedNodes.map((selectedId) => rowData.findIndex((item) => getIdentifer(item) === selectedId));

	const nodes = matches.map((index) => gridApi.getRowNode(index.toString()));
	/** Clear all previously selected, didnt find any better way to do this */
	gridApi.getRowNode('0')?.setSelected(false, true);
	/**Select all the new nodes */
	nodes.forEach((s) => s?.setSelected(true, false));
}
