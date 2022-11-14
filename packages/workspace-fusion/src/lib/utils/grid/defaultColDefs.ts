import { ColDef } from '@equinor/workspace-ag-grid';
import { FusionMediator } from '../../types';

/**
 * Applies a set of default column definition parameters.
 * So that the user doesnt have to specify stuff like sortable
 * @param columnDefs List of column defintions to override.
 * @returns A list of column defintions with default settings injected
 */
export function applyDefaultColumnDefinitions<TData extends Record<PropertyKey, unknown>>(
	columnDefs: ColDef<TData>[]
): ColDef<TData>[] {
	return columnDefs.map((colDef): ColDef<TData> => ({ resizable: true, sortable: true, ...colDef }));
}

/**
 * Applies onclick to all cells by default
 */
export function applyWorkspaceClickToCells<TData extends Record<PropertyKey, unknown>>(
	colDefs: ColDef<TData>[],
	{ clickService }: FusionMediator<TData>
): ColDef<TData>[] {
	return colDefs.map((colDef) => ({
		onCellClicked: (ev) => ev.data && clickService.click({ item: ev.data }),
		...colDef,
	}));
}
