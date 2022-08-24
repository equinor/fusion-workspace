import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridController } from '../classes/gridController';
import { useRowData } from '../hooks/useRowData';
import { StyledGridWrapper } from './grid.styles';

interface GridProps<T> {
	controller: GridController<T>;
}

export function Grid<T>({ controller }: GridProps<T>) {
	return (
		<StyledGridWrapper className="ag-theme-alpine">
			<AgGridReact
				gridOptions={controller.gridOptions}
				columnDefs={controller.columnDefs}
				rowData={useRowData(controller)}
			/>
		</StyledGridWrapper>
	);
}
