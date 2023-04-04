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
  IServerSideGetRowsParams,
} from '@equinor/workspace-ag-grid';

export type { ColDef, ColumnState, GetIdentifier, GridConfig, GridController, GridOptions, ICellRendererProps };

type GridConfig<T, TFilter> = {
  columnDefinitions: [ColDef<T>, ...ColDef<T>[]];
  getRows: (params: IServerSideGetRowsParams, filters: TFilter) => Promise<void>;
  gridOptions?: Omit<GridOptions<T>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>;
};
