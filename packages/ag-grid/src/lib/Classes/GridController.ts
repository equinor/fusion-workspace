import { BaseController } from '@workspace/basecontroller';
import { ColDef } from 'ag-grid-community';

export class GridController<T> extends BaseController {
    rowData: T[] = [];
    columnDefs: ColDef[] = [];

    constructor() {
        super();
    }
}
