import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { SideBarDef } from 'ag-grid-community';
import { ModuleRegistry } from '@ag-grid-community/core';
import 'ag-grid-enterprise';

import { StyledGridWrapper } from './grid.styles';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { useAgStyles } from '../../ag-grid-styling';

type GridProps<TData> = {
  height: number;
} & AgGridReactProps<TData>;

ModuleRegistry.registerModules([ClientSideRowModelModule, ColumnsToolPanelModule]);

export function Grid<TData>({ columnDefs, gridOptions, height }: GridProps<TData>) {
  const themeName = useAgStyles();

  return (
    <StyledGridWrapper style={{ height }}>
      <AgGridReact
        rowHeight={32}
        groupDisplayType={'multipleColumns'}
        headerHeight={32}
        className={themeName}
        gridOptions={gridOptions}
        // gridOptions={gridOptions}
        columnDefs={columnDefs}
        // rowSelection="multiple"
      />
    </StyledGridWrapper>
  );
}

const sideBar: SideBarDef = {
  hiddenByDefault: false,
  position: 'right',
  toolPanels: [
    {
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      toolPanelParams: {
        suppressRowGroups: true,
        suppressValues: true,
        suppressPivots: true,
        suppressPivotMode: true,
        suppressColumnFilter: true,
        suppressColumnSelectAll: true,
        suppressColumnExpandAll: true,
      },
    },
  ],
  defaultToolPanel: 'columns',
};
