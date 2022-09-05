import { GridReadyEvent, ColumnApi } from 'ag-grid-community';
import { GridController } from '../classes';

/** Listens for any column change */
export function listenForColumnChanges<TData>(controller: GridController<TData>, gridReady: GridReadyEvent) {
	const catchColumnState = () => updateColumnState(controller, gridReady.columnApi);
	gridReady.api.addEventListener('columnMoved', catchColumnState);
	gridReady.api.addEventListener('columnVisible', catchColumnState);
	gridReady.api.addEventListener('columnPinned', catchColumnState);
	listenForColumnResize(gridReady, catchColumnState);
	gridReady.api.addEventListener('newColumnsLoaded', catchColumnState);
	gridReady.api.addEventListener('sortChanged', catchColumnState);
}

/** Updates the controllers column state */
function updateColumnState<TData>(controller: GridController<TData>, columnApi: ColumnApi) {
	controller.setColumnState(columnApi.getColumnState());
}

/**
 * Applies the column state from the controller on the grid
 */
export function applyColumnStateFromGridController<TData>(controller: GridController<TData>, columnApi: ColumnApi) {
	if (controller.columnState) {
		columnApi.applyColumnState({ applyOrder: true, state: controller.columnState });
	}
}

/**
 * Column resize fires constantly while dragging
 * This function adds debounce to only capture on resize end
 */
function listenForColumnResize(gridReady: GridReadyEvent, catchColumnState: () => void) {
	let timeoutId;
	gridReady.api.addEventListener('columnResized', () => {
		if (timeoutId) {
			console.log('event queued, waiting');
			return;
		}
		timeoutId = setTimeout(() => {
			console.log('Capturing column state');
			timeoutId = undefined;
			catchColumnState();
		}, 2000);
	});
}
