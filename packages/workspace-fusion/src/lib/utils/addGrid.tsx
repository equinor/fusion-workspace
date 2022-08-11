import { Grid, GridController } from '@workspace/grid';
import { ColDef } from 'ag-grid-community';
import { GridIcon as HeaderComponent } from '../icons/GridIcon';
import { FusionWorkspaceController, GridConfig } from '../types';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function addGrid<TData, TError, TContext>(
	gridConfig: GridConfig<TData>,
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	const gridController = new GridController<TData>();

	gridController.columnDefs = prepareColumnDefintions(gridConfig.columnDefinitions, controller);
	gridController.gridOptions = gridConfig.gridOptions;

	controller.addController({ controller: gridController, name: 'grid', config: gridControllerBinder });
	/** TODO: prevent duplicates */
	controller.controllers.view.tabs.push({
		Component: () => <Grid controller={controller.controllers.grid} />,
		name: 'grid',
		HeaderComponent,
	});
}

export function gridControllerBinder<TData, TError, TContext>(
	gridController: GridController<TData>,
	workspaceController: FusionWorkspaceController<TData, TError, TContext>
) {
	workspaceController.onFilteredDataChanged(gridController.setRowData);
}

/**
 * Applies some default settings to the column definitions.
 * @param columnDefs column definitions to alter
 * @param controller Workspace controller
 * @returns Altered column definitions
 */
function prepareColumnDefintions<TData, TError, TContext>(
	columnDefs: ColDef<TData>[],
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, controller));
}
