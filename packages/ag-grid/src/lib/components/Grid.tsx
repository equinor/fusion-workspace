import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridController } from '../classes/gridController';
import { useRowData } from '../hooks/useRowData';

interface GridProps<T> {
    controller: GridController<T>;
}

export function Grid<T>({ controller }: GridProps<T>) {
    return (
        <div className="ag-theme-alpine" style={{ height: 1000, width: 1200 }}>
            <AgGridReact
                gridOptions={controller.gridOptions}
                columnDefs={controller.columnDefs}
                rowData={useRowData(controller)}
            />
        </div>
    );
}
