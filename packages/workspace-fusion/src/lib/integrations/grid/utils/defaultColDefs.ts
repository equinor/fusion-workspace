import { ColDef } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../types';

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
export function applyWorkspaceClickToCells<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	colDefs: ColDef<TData>[],
	{ selectionService, getIdentifier }: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): ColDef<TData>[] {
	return colDefs.map((colDef) => ({
		onCellClicked: (ev) => {
			if (!ev.data) return;
			selectionService.selectedNodes = [{ id: getIdentifier(ev.data), item: ev.data }];
		},
		...colDef,
	}));
}
