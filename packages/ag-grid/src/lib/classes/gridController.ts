import { ColDef, GridOptions } from 'ag-grid-community';
import { registerCallback } from '../functions/registerCallback';
import {
    Callback,
    OnCallbackSet,
    OnGridOptionsChangedCallback,
    OnRowDataChangedCallback,
} from '../types';

export class GridController<T> {
    rowData: T[] = [];
    columnDefs: ColDef[] = [];
    gridOptions: GridOptions | undefined = undefined;

    /**
     * Callbacks
     */
    onRowDataChangedCallbacks: Callback<OnRowDataChangedCallback<T>>[] = [];
    onGridOptionsChangedCallbacks: Callback<OnGridOptionsChangedCallback<T>>[] = [];

    setGridOptions = (gridOptions: GridOptions) => {
        this.gridOptions = gridOptions;
        this.onGridOptionsChangedCallbacks.forEach(({callback}) => callback(gridOptions, this))
    };
    onGridOptionsChanged = (cb: OnGridOptionsChangedCallback<T>) =>
        registerCallback(cb, this.onGridOptionsChangedCallbacks, this.unsubOnGridOptionsChanged);

    private unsubOnGridOptionsChanged = (id: string) => {
        this.onGridOptionsChangedCallbacks = this.onGridOptionsChangedCallbacks.filter(
            (s) => s.id !== id
        );
    };

    setRowData = (newData: T[]) => {
        this.rowData = newData;
        this.onRowDataChangedCallbacks.forEach(({ callback }) => callback(newData, this));
    };

    onRowDataChanged = (callback: OnRowDataChangedCallback<T>): OnCallbackSet =>
        registerCallback(callback, this.onRowDataChangedCallbacks, this.unsubOnRowDataChanged);

    private unsubOnRowDataChanged = (id: string) => {
        this.onRowDataChangedCallbacks = this.onRowDataChangedCallbacks.filter((s) => s.id !== id);
    };
}
