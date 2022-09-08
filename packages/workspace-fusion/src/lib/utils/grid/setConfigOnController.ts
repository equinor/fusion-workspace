import { GridController } from '@workspace/grid';
import { ColDef } from 'ag-grid-community';
import { FusionMediator, GridConfig } from '../../types';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function setConfigOnController<TData, TError>(
	gridConfig: GridConfig<TData>,
	gridController: GridController<TData>,
	mediator: FusionMediator<TData, TError>
) {
	gridConfig.gridOptions && gridController.setGridOptions(gridConfig.gridOptions);
	gridController.columnDefs = prepareColumnDefintions(gridConfig.columnDefinitions, mediator);
}

/**
 * Applies some default settings to the column definitions.
 * @param columnDefs column definitions to alter
 * @param mediator Workspace controller
 * @returns Altered column definitions
 */
function prepareColumnDefintions<TData, TError>(columnDefs: ColDef<TData>[], mediator: FusionMediator<TData, TError>) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, mediator));
}
