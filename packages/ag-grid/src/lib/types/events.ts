import { GridOptions } from 'ag-grid-community';
import { GridController } from '../classes';

/**
 * Callback function to be called when row data changes
 */
export type OnRowDataChangedCallback<T> = (newData: T[], controller: GridController<T>) => void;

/**
 * Callback function to be called when gridoptions change
 */
export type OnGridOptionsChangedCallback<T> = (gridOptions: GridOptions, controller: GridController<T>) => void;
