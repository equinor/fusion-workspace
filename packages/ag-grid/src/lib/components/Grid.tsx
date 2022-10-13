import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColumnApi, GridApi, SideBarDef } from 'ag-grid-community';
import { ModuleRegistry } from '@ag-grid-community/core';
import 'ag-grid-enterprise';

import { useRowData, selectRowNode, useSelectionService, useColumnState } from '../hooks';
import { StyledGridWrapper } from './grid.styles';
import { applyColumnStateFromGridController, listenForColumnChanges } from '../utils';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { GridController } from '../types';

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
	const [gridApi, setGridApi] = useState<GridApi>();
	const [columnApi, setColumnApi] = useState<ColumnApi>();
	const rowData = useRowData(controller);

	useSelectionService(controller, gridApi);
	useColumnState(controller, columnApi);

	return (
		<StyledGridWrapper style={{ height }} className="ag-theme-alpine">
			<AgGridReact
				onGridReady={(api) => {
					setGridApi(api.api);
					setColumnApi(api.columnApi);
					selectRowNode(controller.selectedNodes ?? [], controller.getIdentifier, api.api, rowData);
					applyColumnStateFromGridController(controller, api.columnApi);
					listenForColumnChanges(controller, api);
				}}
				gridOptions={controller.gridOptions}
				sideBar={sideBar}
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
