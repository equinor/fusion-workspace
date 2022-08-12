import { WorkspaceViewController } from '@equinor/workspace-react';
import { Grid, GridController } from '@workspace/grid';
import { ColDef } from 'ag-grid-community';
import { GridIcon as HeaderComponent } from '../icons/GridIcon';
import { FusionWorkspaceController, GridConfig, WorkspaceTabNames } from '../types';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function addGrid<TData, TError>(
	gridConfig: GridConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	const gridController = new GridController<TData>();

	gridController.columnDefs = prepareColumnDefintions(gridConfig.columnDefinitions, mediator);
	gridController.gridOptions = gridConfig.gridOptions;

	gridControllerBinder(gridController, mediator);

	/** TODO: prevent duplicates */
	viewController.tabs.push({
		Component: () => <Grid controller={gridController} />,
		name: 'grid',
		HeaderComponent,
	});
}

export function gridControllerBinder<TData, TError>(
	gridController: GridController<TData>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	mediator.filteredData.onchange(gridController.setRowData);
}

/**
 * Applies some default settings to the column definitions.
 * @param columnDefs column definitions to alter
 * @param controller Workspace controller
 * @returns Altered column definitions
 */
function prepareColumnDefintions<TData, TError>(
	columnDefs: ColDef<TData>[],
	controller: FusionWorkspaceController<TData, TError>
) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, controller));
}
