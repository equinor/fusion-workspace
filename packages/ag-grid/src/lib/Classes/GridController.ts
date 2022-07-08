import { ColDef, GridOptions } from 'ag-grid-community';

export class GridController<T> {
    rowData: T[] = [];
    columnDefs: ColDef[] = [];
    gridOptions: GridOptions | undefined = undefined;

    setGridOptions = (gridOptions: GridOptions) => {
        this.gridOptions = gridOptions;
    };
}
