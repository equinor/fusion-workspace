import { ModuleRegistry } from '@ag-grid-community/core';
import { StyledGridWrapper } from './grid.styles';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import useStyles from '@equinor/fusion-react-ag-grid-styles';
import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';

type GridProps<TData> = {
  height: number;
} & AgGridReactProps<TData>;

ModuleRegistry.registerModules([ClientSideRowModelModule, ServerSideRowModelModule]);

export function Grid<TData>({ columnDefs, gridOptions, height, rowData, modules, ...rest }: GridProps<TData>) {
  const styles = useStyles() as { root: string; grid: string };

  return (
    <StyledGridWrapper style={{ height }} className={`${styles.root} ag-theme-alpine-fusion`}>
      <AgGridReact
        rowHeight={32}
        groupDisplayType={'multipleColumns'}
        headerHeight={32}
        // className={themeName}
        gridOptions={gridOptions}
        columnDefs={columnDefs}
        rowData={rowData}
        modules={modules}
        rowSelection="single"
        {...rest}
      />
    </StyledGridWrapper>
  );
}
