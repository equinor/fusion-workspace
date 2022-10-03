import { ColumnApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { ProxyGrid } from '../classes';
import { applyColumnStateFromGridController } from '../utils';

/** Hook for listening to external column state changes
 * Will trigger when someone calls the controller.setColumnState()
 */
export function useColumnState<T extends object>(controller: ProxyGrid<T>, columnApi: ColumnApi | undefined) {
	useEffect((): undefined | (() => void) => {
		if (!columnApi) return;
		const unsub = controller.subscribe('columnState', () =>
			applyColumnStateFromGridController(controller, columnApi)
		);
		// eslint-disable-next-line consistent-return
		return unsub;
	}, [columnApi, controller]);
}
