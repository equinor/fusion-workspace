import { GridReadyEvent, ColumnApi } from 'ag-grid-community';
import { GridController } from '../classes';

/** Listens for any column change */
export function listenForColumnChanges<TData>(controller: GridController<TData>, gridReady: GridReadyEvent) {
	const catchColumnState = () => updateColumnState(controller, gridReady.columnApi);
	gridReady.api.addEventListener('columnMoved', catchColumnState);
	gridReady.api.addEventListener('columnVisible', catchColumnState);
	gridReady.api.addEventListener('columnPinned', catchColumnState);
	gridReady.api.addEventListener('columnResized', catchColumnState);
	gridReady.api.addEventListener('newColumnsLoaded', catchColumnState);
}

/** Updates the controllers column state */
function updateColumnState<TData>(controller: GridController<TData>, columnApi: ColumnApi) {
	controller.columnState = columnApi.getColumnState();
}

/**
 * Applies the column state from the controller on the grid
 */
export function applyColumnStateFromGridController<TData>(controller: GridController<TData>, columnApi: ColumnApi) {
	if (controller.columnState) {
		columnApi.applyColumnState({ applyOrder: true, state: controller.columnState });
	}
}
