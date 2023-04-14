/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/grid
 */

import {
  ColDef,
  ColumnState,
  GridOptions,
  ICellRendererProps,
  IServerSideGetRowsParams,
  IServerSideGetRowsRequest,
} from '@equinor/workspace-ag-grid';

export type {
  ColDef,
  ColumnState,
  GridConfig,
  GridOptions,
  ICellRendererProps,
  IServerSideGetRowsParams,
  IServerSideGetRowsRequest,
};

type GridConfig<T, TFilter> = {
  columnDefinitions: [ColDef<T>, ...ColDef<T>[]];
  getRows: (params: IServerSideGetRowsParams, filters: TFilter) => Promise<void>;
  gridOptions?: Omit<GridOptions<T>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>;
};
