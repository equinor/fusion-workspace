import { useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridOptions, SideBarDef } from 'ag-grid-community';
import { ModuleRegistry } from '@ag-grid-community/core';
import 'ag-grid-enterprise';

import { useRowData, selectRowNode, useSelectionService, useColumnState } from '../hooks';
import { StyledGridWrapper } from './grid.styles';
import { applyColumnStateFromGridController, listenForColumnChanges } from '../utils';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { GridController } from '../types';
import { useAgStyles } from '../../ag-grid-styling';
import { LicenseManager } from 'ag-grid-enterprise';

if ((window as any)._config_.agGrid.licenseKey) {
  LicenseManager.setLicenseKey((window as any)._config_.agGrid.licenseKey as string);
} else {
  console.warn('No ag grid license found');
}

type GridProps<TData extends Record<PropertyKey, unknown>> = {
  controller: GridController<TData>;
  height: number;
};

ModuleRegistry.registerModules([ClientSideRowModelModule, ColumnsToolPanelModule]);

/**
 * Grid to be used with a controller
 * This component is for more advanced usage then you can get with the React Grid.
 * ```TS
 * const gc = new GridController()
 * gc.colDefs = [{field: "id"}];
 * gc.rowData = [{id: "123"},{id: "1234"}]
 * <Grid controller={gc} />
 * ```
 */
export function Grid<TData extends Record<PropertyKey, unknown>>({ controller, height }: GridProps<TData>) {
  const gridOptions = useRef<GridOptions>({ ...controller.gridOptions, context: controller.context });

  const themeName = useAgStyles();

  useEffect(() => {
    const sub = controller.context$.subscribe((s) => {
      gridOptions.current.context = s;
      if (gridOptions.current.api) {
        gridOptions.current.api.refreshCells();
      }
    });
    return () => sub.unsubscribe();
  }, []);

  const rowData = useRowData(controller);

  useSelectionService(controller, gridOptions.current?.api ?? undefined);
  useColumnState(controller, gridOptions.current.columnApi ?? undefined);

  return (
    <StyledGridWrapper style={{ height }}>
      <AgGridReact
        rowHeight={32}
        groupDisplayType={'multipleColumns'}
        headerHeight={32}
        className={themeName}
        onGridReady={(api) => {
          selectRowNode(controller.selectedNodes ?? [], controller.getIdentifier, api.api, rowData);
          applyColumnStateFromGridController(controller, api.columnApi);
          listenForColumnChanges(controller, api);
        }}
        gridOptions={gridOptions.current}
        columnDefs={controller.columnDefs}
        rowData={rowData}
        rowSelection="multiple"
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
