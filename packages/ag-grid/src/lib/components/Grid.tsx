import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridApi } from 'ag-grid-community';

import { GridController } from '../classes';
import { useRowData, selectRowNode, useSelectionService } from '../hooks';
import { StyledGridWrapper } from './grid.styles';
import { useAgGridStyles } from '@equinor/fusion-react-ag-grid-addons';

interface GridProps<T> {
	controller: GridController<T>;
}

export function Grid<T>({ controller }: GridProps<T>) {
	const [gridApi, setGridApi] = useState<GridApi>();
	const rowData = useRowData(controller);

	useSelectionService(controller, gridApi);
	useAgGridStyles();

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
