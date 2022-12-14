/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/grid
 */

import {
	ColDef,
	ColumnState,
	GetIdentifier,
	GridController,
	GridOptions,
	ICellRendererProps,
} from '@equinor/workspace-ag-grid';

export type { ColDef, ColumnState, GetIdentifier, GridConfig, GridController, GridOptions, ICellRendererProps };

type GridConfig<T> = {
	columnDefinitions: [ColDef<T>, ...ColDef<T>[]];
	gridOptions?: Omit<GridOptions<T>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>;
};
