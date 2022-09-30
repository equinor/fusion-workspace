import { ColumnApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { ProxyGrid } from '../classes';
import { applyColumnStateFromGridController } from '../utils';

/** Hook for listening to external column state changes
 * Will trigger when someone calls the controller.setColumnState()
 */
export function useColumnState<T>(controller: ProxyGrid<T>, columnApi: ColumnApi | undefined) {
	useEffect(() => {
		if (!columnApi) return;
		controller.subscribe('columnState', () => applyColumnStateFromGridController(controller, columnApi));
	}, [columnApi, controller]);
}
