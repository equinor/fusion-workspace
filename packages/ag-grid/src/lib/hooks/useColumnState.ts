import { ColumnApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { GridController } from '../classes';
import { applyColumnStateFromGridController } from '../utils';

/** Hook for listening to external column state changes
 * Will trigger when someone calls the controller.setColumnState()
 */
export function useColumnState<T>(controller: GridController<T>, columnApi: ColumnApi | undefined) {
	useEffect(() => {
		if (!columnApi) return;
		const unsub = controller.onColumnStateChanged(() => applyColumnStateFromGridController(controller, columnApi));
		return unsub;
	}, [columnApi, controller]);
}
