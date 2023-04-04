import { ColDef, GridOptions } from 'ag-grid-community';
import { Grid } from './Grid';

export type ClientGridProps<TData> = {
  height: number;
  gridOptions?: GridOptions<TData>;
  rowData: TData[];
  colDefs: ColDef[];
};

export function ClientGrid<TData>({ gridOptions, height, colDefs, rowData }: ClientGridProps<TData>) {
  gridOptions ??= {};
  Object.assign(gridOptions, getClientSettings(rowData, colDefs));
  return <Grid height={height} gridOptions={gridOptions} />;
}

const getClientSettings = <TData,>(rowData: TData[], colDef: ColDef[]): GridOptions<TData> => ({
  rowData,
  columnDefs: colDef,
});
