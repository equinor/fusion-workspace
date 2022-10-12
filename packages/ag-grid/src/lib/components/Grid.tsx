import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ColumnApi, GridApi, GridOptions, SideBarDef } from 'ag-grid-community';
import { ModuleRegistry } from '@ag-grid-community/core';
import 'ag-grid-enterprise';

import { useRowData, selectRowNode, useSelectionService, useColumnState } from '../hooks';
import { StyledGridWrapper } from './grid.styles';
import { applyColumnStateFromGridController, createGridController, listenForColumnChanges } from '../utils';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { GridController } from '../types';
type GridProps<T extends Record<PropertyKey, unknown>> = {
	controller: GridController<T>;
	height: number;
};

ModuleRegistry.registerModules([ClientSideRowModelModule, ColumnsToolPanelModule]);

type ReactGridProps<T extends Record<PropertyKey, unknown>> = {
	height: number;
	rowData: T[];
	colDefs: ColDef<T>[];
	gridOptions?: GridOptions<T>;
};

export function ReactGrid<T extends Record<PropertyKey, unknown>>({
	height,
	rowData,
	colDefs,
	gridOptions,
}: ReactGridProps<T>) {
	const controller = useMemo(() => {
		const s = createGridController(() => '');
		s.columnDefs = colDefs;
		s.rowData = rowData;
		s.gridOptions = gridOptions;
		return s;
	}, [colDefs, gridOptions, rowData]);

	return <Grid controller={controller} height={height} />;
}

export function Grid<T extends Record<PropertyKey, unknown>>({ controller, height }: GridProps<T>) {
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
