import { GridReadyEvent, ColumnApi } from 'ag-grid-community';
import { GridController } from '../classes';

/** Listens for any column change */
export function listenForColumnChanges<TData>(controller: GridController<TData>, api: GridReadyEvent) {
	const catchColumnState = () => updateColumnState(controller, api.columnApi);
	api.api.addEventListener('columnMoved', catchColumnState);
	api.api.addEventListener('columnVisible', catchColumnState);
	api.api.addEventListener('columnPinned', catchColumnState);
	api.api.addEventListener('columnResized', catchColumnState);
	api.api.addEventListener('newColumnsLoaded', catchColumnState);
}

/** Updates the controllers column state */
function updateColumnState<TData>(controller: GridController<TData>, columnApi: ColumnApi) {
	console.log(columnApi.getColumnState());
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
