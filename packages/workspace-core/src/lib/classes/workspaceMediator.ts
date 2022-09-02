import { ObjectType, OnchangeCallback } from '../types';
import { BookmarkService } from './bookmarkService/bookmarkService';
import { Observable } from './observable';
import { SelectionService } from './selectionService';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 */
export class WorkspaceMediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TBookmarkState extends Record<PropertyKey, unknown> = ObjectType<unknown>
> {
	/**
	 * Callback that returns an instance of itself
	 * Helpful when chaining
	 */
	addMiddleware = (cb: (mediator: this) => void) => {
		cb(this);
		return this;
	};

	bookmarkService = new BookmarkService<TBookmarkState>();
	selection = new SelectionService();

	/** Register a callback to be called when filtered data changes*/
	onDataChange: (callback: OnchangeCallback<TData[]>) => () => void;
	/** The data used for the workspace */
	data: TData[] | undefined;
	/** Sets the data */
	setData: (value: TData[]) => void;

	/** Register a callback to be called when filtered data changes*/
	onFilterDataChange: (callback: OnchangeCallback<TData[]>) => () => void;
	/** The filtered data used for the workspace */
	filteredData: TData[] | undefined;
	/** Sets the filtered data */
	setFilteredData: (value: TData[]) => void;

	/** Value of the last click event */
	lastClick?: TOnClick;
	/** Triggers a clickevent */
	click: (clickEv: TOnClick) => void;
	/** Register a callback to be called when click is triggered */
	onClick: (callback: OnchangeCallback<TOnClick>) => () => void;
	/** Triggers an error event */
	throwError: (error: TError) => void;
	/** Register a callback to be called when an error occurs */
	onError: (cb: (error: TError) => void) => void;

	constructor() {
		const data = new Observable<TData[]>();
		this.onDataChange = data.onchange;
		data.onchange((val) => {
			this.data = val;
		});
		this.setData = data.setValue;

		const filterData = new Observable<TData[]>();
		this.onFilterDataChange = filterData.onchange;
		filterData.onchange((val) => {
			this.filteredData = val;
		});
		this.setFilteredData = filterData.setValue;

		const click = new Observable<TOnClick>();
		click.onchange((val) => {
			this.lastClick = val;
		});
		this.click = click.setValue;
		this.onClick = click.onchange;

		const error = new Observable<TError>();
		this.throwError = error.setValue;
		this.onError = error.onchange;
	}

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
