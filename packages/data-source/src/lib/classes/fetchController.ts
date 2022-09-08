import { Observable, OnchangeCallback } from '@workspace/workspace-core';
import { FetchData } from '../types';
import { validateData } from '../utils';

export class FetchController<TData> {
	private fetch: FetchData<TData>;

	/** If isLoading is true this function will be defined */
	abort?: () => void;

	constructor(fetch: FetchData<TData>) {
		this.fetch = fetch;
		const fetching = new Observable<boolean>();
		this.onIsFetchingChanged = fetching.onchange;
		this.setIsFetching = fetching.setValue;
		fetching.onchange((val) => {
			this.isFetching = val;
		});

		const loading = new Observable<boolean>();
		this.setIsLoading = loading.setValue;
		this.onIsLoadingChanged = loading.onchange;
		loading.onchange((val) => {
			this.isLoading = val;
		});

		const dataObservable = new Observable<TData[]>(this.data);
		this.setData = dataObservable.setValue;
		this.onDataChanged = dataObservable.onchange;
		dataObservable.onchange((val) => {
			this.data = val;
		});
	}

	/** Function for fetching data */
	getDataAsync = async () => {
		//Data is already fetching, just return the promise
		if (this.isFetching) {
			return await this.dataPromise;
		}
		const { abort, signal } = new AbortController();
		this.abort = abort;
		if (!this.data) {
			this.setIsLoading(true);
		}
		this.setIsFetching(true);
		const promise = this.fetch(signal);
		this.dataPromise = promise;
		this.setData(validateData(await promise));
		this.setIsFetching(false);
		this.setIsLoading(false);
		return this.data;
	};

	private dataPromise?: TData[] | Promise<TData[]>;

	/** The data */
	data: TData[] | undefined;

	/** Set new data */
	private setData: (value: TData[]) => void;

	/** Add a callback to fire when data changes */
	onDataChanged: (callback: OnchangeCallback<TData[]>) => () => void;

	/** True if its fetching for the first time */
	isLoading = false;

	private setIsLoading: (value: boolean) => void;

	/** Callback to fire when isLoading changes */
	onIsLoadingChanged: (callback: OnchangeCallback<boolean>) => () => void;

	private setIsFetching: (value: boolean) => void;

	/** True if currently fetching data */
	isFetching = false;

	/** Callback to fire when isFetching changes */
	onIsFetchingChanged: (callback: OnchangeCallback<boolean>) => () => void;
}
