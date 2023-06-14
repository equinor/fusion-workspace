import { ColDef, GridOptions, Module } from '@ag-grid-community/core';
import { Grid } from './Grid';

export type ClientGridProps<TData> = {
  height: number;
  gridOptions?: GridOptions<TData>;
  rowData: TData[];
  colDefs: ColDef[];
  modules?: Module[] | undefined;
};

export function ClientGrid<TData>({ gridOptions, height, colDefs, rowData, modules }: ClientGridProps<TData>) {
  /**
   *  Immutability does not work here
   *  User depends on gridOptions object reference
   */
  gridOptions ??= {};
  Object.assign(gridOptions, getClientSettings(colDefs));

  return <Grid gridOptions={gridOptions} modules={modules} rowData={rowData} height={height} columnDefs={colDefs} />;
}

const getClientSettings = <TData,>(colDef: ColDef[]): GridOptions<TData> => ({
  columnDefs: colDef,
});
