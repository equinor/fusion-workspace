import { GridConfig, GridController, ColDef } from '..';
import { FusionMediator } from '../../../types';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function setConfigOnController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(
	gridConfig: GridConfig<TData>,
	gridController: GridController<TData, TContext>,
	mediator: FusionMediator<TData, TContext>
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
function prepareColumnDefintions<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(columnDefs: ColDef<TData>[], mediator: FusionMediator<TData, TContext>) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, mediator));
}
