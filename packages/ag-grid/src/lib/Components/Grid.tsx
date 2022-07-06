import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridController } from '../Classes/GridController';

interface GridProps<T> {
    controller: GridController<T>;
}

export function Grid<T>({ controller }: GridProps<T>) {
    return (
        <div className="ag-theme-alpine" style={{ height: 1000, width: 1200 }}>
            <AgGridReact columnDefs={controller.columnDefs} rowData={controller.rowData} />
        </div>
    );
}
