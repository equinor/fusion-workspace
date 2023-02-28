import { GridController, ColDef } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../lib';
import { GridConfig } from '../../../lib/integrations/grid';

import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function setConfigOnController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	gridConfig: GridConfig<TData>,
	gridController: GridController<TData, TContext>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	gridController.gridOptions = { ...gridConfig.gridOptions, pagination: true, paginationAutoPageSize: true };

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
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(columnDefs: ColDef<TData>[], mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, mediator));
}
