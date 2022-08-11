import { ColDef } from 'ag-grid-community';

import { FusionWorkspaceController } from '../types';

/**
 * Applies a set of default column definition parameters.
 * So that the user doesnt have to specify stuff like sortable
 * @param columnDefs List of column defintions to override.
 * @returns A list of column defintions with default settings injected
 */
export function applyDefaultColumnDefinitions<TData>(columnDefs: ColDef<TData>[]): ColDef<TData>[] {
	return columnDefs.map((colDef): ColDef<TData> => ({ resizable: true, sortable: true, ...colDef }));
}

/**
 * Applies onclick to all cells by default
 */
export function applyWorkspaceClickToCells<TData, TError, TContext>(
	colDefs: ColDef<TData>[],
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	return colDefs.map((colDef) => ({ onCellClicked: (ev) => controller.click({ item: ev.data }), ...colDef }));
}
