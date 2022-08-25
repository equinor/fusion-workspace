import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridController } from '../classes/gridController';
import { useRowData } from '../hooks/useRowData';
import { StyledGridWrapper } from './grid.styles';
import { selectRowNode, useSelectionService } from '../hooks/useHighlightedItem';
import { useState } from 'react';
import { GridApi } from 'ag-grid-community';

interface GridProps<T> {
	controller: GridController<T>;
}

export function Grid<T>({ controller }: GridProps<T>) {
	const [gridApi, setGridApi] = useState<GridApi>();
	const rowData = useRowData(controller);

	useSelectionService(controller, gridApi);

	return (
		<StyledGridWrapper className="ag-theme-alpine">
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
