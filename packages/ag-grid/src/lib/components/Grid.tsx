import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridController } from '../classes';
import { useRowData, selectRowNode, useSelectionService } from '../hooks';
import { StyledGridWrapper } from './grid.styles';

interface GridProps<T> {
	controller: GridController<T>;
	height: number;
	width: number;
}

export function Grid<T>({ controller, height, width }: GridProps<T>) {
	const [gridApi, setGridApi] = useState<GridApi>();
	const rowData = useRowData(controller);

	useSelectionService(controller, gridApi);

	return (
		<StyledGridWrapper height={height} width={width} className="ag-theme-alpine">
			<AgGridReact
				onGridReady={(api) => {
					setGridApi(api.api);
					selectRowNode(controller.selectedNodes.value ?? [], controller.objectIdentifier, api.api, rowData);
				}}
				gridOptions={controller.gridOptions}
				columnDefs={controller.columnDefs}
				rowData={rowData}
				rowSelection="multiple"
			/>
		</StyledGridWrapper>
	);
}
