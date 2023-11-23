import {
  GridOptions,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  ColDef as AgGridColDef,
  Module,
} from '@ag-grid-community/core';
import { Grid } from './Grid';
import { AgGridReactProps } from '@ag-grid-community/react';

export type ServerGridProps<TData> = {
  gridOptions?: GridOptions<TData>;
  getRows: (params: IServerSideGetRowsParams<any>) => Promise<void>;
  height: number;
  colDefs: ColDef<TData>[];
  context?: any;
  modules?: Module[] | undefined;
} & AgGridReactProps<TData>;

/** TODO: strip group and sort and fetch from api */
type ColDef<TData> = AgGridColDef<TData>;

export function ServerGrid<TData>({
  getRows,
  height,
  gridOptions,
  colDefs,
  context,
  modules,
  ...rest
}: ServerGridProps<TData>) {
  /**
   *  Immutability does not work here
   *  User depends on gridOptions object reference
   */
  gridOptions ??= {};
  Object.assign(gridOptions, getServerSettings({ getRows }, colDefs));

  return <Grid<TData> height={height} context={context} modules={modules} gridOptions={gridOptions} {...rest} />;
}

const getServerSettings = <TData,>(dataSource: IServerSideDatasource, colDef: ColDef<TData>[]): GridOptions => ({
  serverSideDatasource: dataSource,
  rowModelType: 'serverSide',
  columnDefs: colDef,
});
