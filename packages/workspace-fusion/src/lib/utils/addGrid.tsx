import { Grid, GridController } from '@workspace/grid';
import { WorkspaceController } from '@workspace/workspace-core';
import { ColDef } from 'ag-grid-community';
import { GridConfig, WorkspaceControllers, WorkspaceOnClick } from '../types';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function addGrid<TData, TError, TContext>(
	gridConfig: GridConfig<TData>,
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
) {
	const gridController = new GridController<TData>();

	gridController.columnDefs = prepareColumnDefintions(gridConfig.columnDefinitions, controller);
	gridController.gridOptions = gridConfig.gridOptions;

	controller.addController({ controller: gridController, name: 'grid', config: gridControllerBinder });
	/** TODO: prevent duplicates */
	controller.controllers.view.tabs.push({
		Component: () => <Grid controller={controller.controllers.grid} />,
		name: 'grid',
	});
}

export function gridControllerBinder<TData, TControllers, TOnClick, TError, TContext>(
	gc: GridController<TData>,
	wc: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) {
	wc.onFilteredDataChanged(gc.setRowData);
}

/**
 * Applies some default settings to the column definitions.
 * @param columnDefs
 * @param controller
 * @returns
 */
function prepareColumnDefintions<TData, TError, TContext>(
	columnDefs: ColDef<TData>[],
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, controller));
}
