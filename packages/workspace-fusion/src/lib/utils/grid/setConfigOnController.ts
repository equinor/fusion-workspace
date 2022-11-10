import { GridConfig, GridController, ColDef } from '../../integrations/grid';
import { FusionMediator } from '../../types';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function setConfigOnController<TData extends Record<PropertyKey, unknown>>(
	gridConfig: GridConfig<TData>,
	gridController: GridController<TData>,
	mediator: FusionMediator<TData>
) {
	if (gridConfig.gridOptions) {
		gridController.gridOptions = gridConfig.gridOptions;
	}

	gridController.columnDefs = prepareColumnDefintions(gridConfig.columnDefinitions, mediator);
}

/**
 * Applies some default settings to the column definitions.
 * @param columnDefs column definitions to alter
 * @param mediator Workspace controller
 * @returns Altered column definitions
 */
function prepareColumnDefintions<TData>(columnDefs: ColDef<TData>[], mediator: FusionMediator<TData>) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, mediator));
}
