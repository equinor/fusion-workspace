import { ObjectType, OnchangeCallback } from '../types';
import { Observable } from './observable';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 */
export class WorkspaceMediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TContext extends ObjectType<TContext> = ObjectType<unknown>
> {
	onDataChange: (callback: OnchangeCallback<TData[]>) => () => void;
	data: TData[] | undefined;
	setData: (value: TData[]) => void;

	onFilterDataChange: (callback: OnchangeCallback<TData[]>) => () => void;
	filteredData: TData[] | undefined;
	setFilteredData: (value: TData[]) => void;

	lastClick;
	click: (clickEv: TOnClick) => void;
	onClick: (callback: OnchangeCallback<TOnClick>) => () => void;

	throwError: (error: TError) => void;
	onError: (cb: (error: TError) => void) => void;

	context?: TContext;

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
