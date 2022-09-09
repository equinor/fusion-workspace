import { ColDef, ColumnState, GridOptions } from 'ag-grid-community';
import { registerCallback } from '../functions';
import { Callback, OnCallbackSet, OnGridOptionsChangedCallback, OnRowDataChangedCallback } from '../types';
import { Observable, OnchangeCallback } from './observable';

export type GetIdentifier<TData> = (item: TData) => string;

export class GridController<TData> {
	getIdentifier: GetIdentifier<TData>;

	constructor(getIdentifier: GetIdentifier<TData>) {
		this.getIdentifier = getIdentifier;
		const columnStateObservable = new Observable<ColumnState[] | undefined>();
		columnStateObservable.isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
		const { onchange, setValue } = columnStateObservable;
		onchange((val) => {
			this.columnState = val;
		});
		this.setColumnState = setValue;
		this.onColumnStateChanged = onchange;
	}

	columnState?: ColumnState[];

	setColumnState: (value: ColumnState[] | undefined) => void;

	onColumnStateChanged: (callback: OnchangeCallback<ColumnState[] | undefined>) => () => void;

	selectedNodes: Observable<string[]> = new Observable<string[]>([]);

	/** The data to be used in the grid */
	rowData: TData[] = [];

	/** The column definitions for the grid */
	columnDefs: ColDef[] = [];

	/** The grid options to be used in the grid */
	gridOptions: GridOptions | undefined = undefined;

	/**
	 * Callbacks
	 */
	private onRowDataChangedCallbacks: Callback<OnRowDataChangedCallback<TData>>[] = [];

	private onGridOptionsChangedCallbacks: Callback<OnGridOptionsChangedCallback<TData>>[] = [];

	/**
	 * Updates the grid options
	 * @param gridOptions new grid options
	 */
	setGridOptions = (gridOptions: GridOptions) => {
		this.gridOptions = gridOptions;
		this.onGridOptionsChangedCallbacks.forEach(({ callback }) => callback(gridOptions, this));
	};

	/**
	 * Registers a function to be called upon when grid options changes
	 * @param cb The callback to be called on whenever grid options changes
	 * @returns The given id for the callback, and a function for unsubscribing.
	 */
	onGridOptionsChanged = (cb: OnGridOptionsChangedCallback<TData>) =>
		registerCallback(cb, this.onGridOptionsChangedCallbacks, this.unsubOnGridOptionsChanged);

	private unsubOnGridOptionsChanged = (id: string) => {
		this.onGridOptionsChangedCallbacks = this.onGridOptionsChangedCallbacks.filter((s) => s.id !== id);
	};

	/**
	 * Sets new row data and triggers all the onRowDataChanged callback's.
	 * @param newData the new data to be set
	 */
	setRowData = (newData: TData[]) => {
		this.rowData = newData;
		this.onRowDataChangedCallbacks.forEach(({ callback }) => callback(newData, this));
	};

	/**
	 * Registers a function to be called upon when row data changes
	 * @param callback The callback to be called on whenever row data changes
	 * @returns The given id for the callback, and a function for unsubscribing.
	 */
	onRowDataChanged = (callback: OnRowDataChangedCallback<TData>): OnCallbackSet =>
		registerCallback(callback, this.onRowDataChangedCallbacks, this.unsubOnRowDataChanged);

	private unsubOnRowDataChanged = (id: string) => {
		this.onRowDataChangedCallbacks = this.onRowDataChangedCallbacks.filter((s) => s.id !== id);
	};
}
