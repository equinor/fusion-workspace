import { BaseController } from '@workspace/basecontroller';
import { ColDef, GridOptions } from 'ag-grid-community';

export class GridController<T> extends BaseController {
    rowData: T[] = [];
    columnDefs: ColDef[] = [];
    gridOptions: GridOptions | undefined = undefined;

    constructor() {
        super();
    }

    setGridOptions = (gridOptions: GridOptions) => {
        this.gridOptions = gridOptions;
    };
}
