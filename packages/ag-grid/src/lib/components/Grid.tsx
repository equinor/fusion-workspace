import { ModuleRegistry } from '@ag-grid-community/core';
import { StyledGridWrapper } from './grid.styles';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { useAgStyles } from '../../ag-grid-styling';
import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';

type GridProps<TData> = {
  height: number;
} & AgGridReactProps<TData>;

ModuleRegistry.registerModules([ClientSideRowModelModule, ServerSideRowModelModule]);

export function Grid<TData>({ columnDefs, gridOptions, height, rowData }: GridProps<TData>) {
  const themeName = useAgStyles();

  return (
    <StyledGridWrapper style={{ height }}>
      <AgGridReact
        rowHeight={32}
        groupDisplayType={'multipleColumns'}
        headerHeight={32}
        className={themeName}
        gridOptions={gridOptions}
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection="single"
      />
    </StyledGridWrapper>
  );
}
