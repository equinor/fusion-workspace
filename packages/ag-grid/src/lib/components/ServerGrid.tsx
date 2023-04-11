import {
  IServerSideGetRowsParams,
  GridOptions,
  ColDef as AgGridColDef,
  IServerSideDatasource,
} from 'ag-grid-community';
import { Grid } from './Grid';

export type ServerGridProps<TData> = {
  gridOptions?: GridOptions<TData>;
  getRows: (params: IServerSideGetRowsParams<any>) => Promise<void>;
  height: number;
  colDefs: ColDef<TData>[];
  context?: any;
};

/** TODO: strip group and sort and fetch from api */
type ColDef<TData> = AgGridColDef<TData>;

export function ServerGrid<TData>({ getRows, height, gridOptions, colDefs, context }: ServerGridProps<TData>) {
  /**
   *  Immutability does not work here
   *  User depends on gridOptions object reference
   */
  gridOptions ??= {};
  Object.assign(gridOptions, getServerSettings({ getRows }, colDefs));

  return <Grid<TData> height={height} context={context} gridOptions={gridOptions} />;
}

const getServerSettings = <TData,>(dataSource: IServerSideDatasource, colDef: ColDef<TData>[]): GridOptions => ({
  serverSideDatasource: dataSource,
  serverSideInfiniteScroll: true,
  rowModelType: 'serverSide',
  columnDefs: colDef,
});
