import { ColDef, GridOptions } from 'ag-grid-community';
import { registerCallback } from '../functions';
import {
  Callback,
  OnCallbackSet,
  OnGridOptionsChangedCallback,
  OnRowDataChangedCallback,
} from '../types';

export class GridController<T> {
  /** The data to be used in the grid */
  rowData: T[] = [];
  /** The column definitions for the grid */
  columnDefs: ColDef[] = [];
  /** The grid options to be used in the grid */
  gridOptions: GridOptions | undefined = undefined;

  /**
   * Callbacks
   */
  private onRowDataChangedCallbacks: Callback<OnRowDataChangedCallback<T>>[] =
    [];
  private onGridOptionsChangedCallbacks: Callback<
    OnGridOptionsChangedCallback<T>
  >[] = [];

  /**
   * Updates the grid options
   * @param gridOptions new grid options
   */
  setGridOptions = (gridOptions: GridOptions) => {
    this.gridOptions = gridOptions;
    this.onGridOptionsChangedCallbacks.forEach(({ callback }) =>
      callback(gridOptions, this)
    );
  };

  /**
   * Registers a function to be called upon when grid options changes
   * @param cb The callback to be called on whenever grid options changes
   * @returns The given id for the callback, and a function for unsubscribing.
   */
  onGridOptionsChanged = (cb: OnGridOptionsChangedCallback<T>) =>
    registerCallback(
      cb,
      this.onGridOptionsChangedCallbacks,
      this.unsubOnGridOptionsChanged
    );

  private unsubOnGridOptionsChanged = (id: string) => {
    this.onGridOptionsChangedCallbacks =
      this.onGridOptionsChangedCallbacks.filter((s) => s.id !== id);
  };

  /**
   * Sets new row data and triggers all the onRowDataChanged callback's.
   * @param newData the new data to be set
   */
  setRowData = (newData: T[]) => {
    this.rowData = newData;
    this.onRowDataChangedCallbacks.forEach(({ callback }) =>
      callback(newData, this)
    );
  };

  /**
   * Registers a function to be called upon when row data changes
   * @param callback The callback to be called on whenever row data changes
   * @returns The given id for the callback, and a function for unsubscribing.
   */
  onRowDataChanged = (callback: OnRowDataChangedCallback<T>): OnCallbackSet =>
    registerCallback(
      callback,
      this.onRowDataChangedCallbacks,
      this.unsubOnRowDataChanged
    );

  private unsubOnRowDataChanged = (id: string) => {
    this.onRowDataChangedCallbacks = this.onRowDataChangedCallbacks.filter(
      (s) => s.id !== id
    );
  };
}
