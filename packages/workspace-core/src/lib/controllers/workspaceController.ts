import { addController } from '../functions';
import { makeCallback } from '../functions/addCallback';

import {
	Callback,
	ContextCallbackSetter,
	Controller,
	MiddlewareConfigFunction,
	OnCallbackSet,
	OnClickCallback,
	OnDataChangedCallback,
	WorkspaceErrorCallback,
} from '../types';

/**
 * ### Workspace Controller
 * The workspace controller is a common hub for all controllers. The idea is for the workspace controller to be pure JS/TS and not be dependent on any JS framework. The Workspace controller will consist of the following.
 *
 * @export
 * @template TData Data type of the created workspace
 * @template TControllers Type of Controllers added to workspace
 * @template TOnClick Type of click Events added to workspace
 * @template TError Error type.
 * @template TContext Custom Context.
 * @return {*}  { WorkspaceController<TData, TControllers, TOnClick, TError, TContext> }
 */

export class WorkspaceController<TData, TControllers extends Record<string, any>, TOnClick, TError, TContext> {
	controllers: TControllers = {} as TControllers;

	private data: TData[] = [];

	private filteredData: TData[] = [];

	private context?: TContext;

	private onFilteredDataChangedCallbacks: Callback<
		OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
	>[] = [];

	private onDataChangedCallbacks: Callback<OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>>[] =
		[];

	private onClickCallbacks: Callback<OnClickCallback<TData, TControllers, TOnClick, TError, TContext>>[] = [];

	private onErrorCallbacks: Callback<WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>>[] = [];

	getFilteredData = () => this.filteredData;

	getData = () => this.data;

	getContext = () => this.context;

	addController = <TController>(
		controller: Controller<
			TController,
			WorkspaceController<TData, TControllers, TOnClick, TError, TContext>,
			TControllers
		>
	) => addController(controller, this);

	addMiddleware = (middleware: MiddlewareConfigFunction<this>) => middleware(this);

	setContext = (context: ContextCallbackSetter<TContext | undefined>) => (this.context = context(this.context));

	setData = (data: TData[], preventCallbacks?: boolean) =>
		(this.data = data) && !preventCallbacks && this.notifyOnDataChangedCallbacks();

	setFilteredData = (data: TData[], preventCallbacks?: boolean) =>
		(this.filteredData = data) && !preventCallbacks && this.notifyOnFilteredDataChangedCallbacks();

	onDataChanged = (callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>): OnCallbackSet =>
		this.addCallback(this.onDataChangedCallbacks, makeCallback(callback), this.removeOnDataChangedCallback);

	onFilteredDataChanged = (
		callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
	): OnCallbackSet =>
		this.addCallback(
			this.onFilteredDataChangedCallbacks,
			makeCallback(callback),
			this.removeOnFilteredDataChangedCallback
		);

	onClick = (callback: OnClickCallback<TData, TControllers, TOnClick, TError, TContext>): OnCallbackSet =>
		this.addCallback(this.onClickCallbacks, makeCallback(callback), this.removeOnClickCallback);

	onError = (callback: WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>) =>
		this.addCallback(this.onErrorCallbacks, makeCallback(callback), this.removeOnErrorCallback);

	click = (ev: TOnClick) => this.onClickCallbacks.forEach(({ callback }) => callback(ev, this));

	throwError = (error: TError) => this.onErrorCallbacks.forEach(({ callback }) => callback(error, this));

	private notifyOnFilteredDataChangedCallbacks = () => {
		this.onFilteredDataChangedCallbacks.forEach(({ callback }) => callback(this.filteredData, this));
	};

	private notifyOnDataChangedCallbacks = () => {
		this.onDataChangedCallbacks.forEach(({ callback }) => callback(this.data, this));
	};

	private addCallback = (
		list: Callback<unknown>[],
		cb: Callback<unknown>,
		unsub: (id: string) => void
	): OnCallbackSet => {
		list.push(cb);
		return {
			id: cb.id,
			unSubscribe: () => unsub(cb.id),
		};
	};

	private removeOnDataChangedCallback = (id: string) => {
		this.onDataChangedCallbacks = this.onDataChangedCallbacks.filter((cb) => cb.id !== id);
	};

	private removeOnFilteredDataChangedCallback = (id: string) => {
		this.onFilteredDataChangedCallbacks = this.onFilteredDataChangedCallbacks.filter((cb) => cb.id !== id);
	};

	private removeOnClickCallback = (id: string) => {
		this.onClickCallbacks = this.onClickCallbacks.filter((cb) => cb.id !== id);
	};

	private removeOnErrorCallback = (id: string) => {
		this.onErrorCallbacks = this.onErrorCallbacks.filter((cb) => cb.id !== id);
	};
}
