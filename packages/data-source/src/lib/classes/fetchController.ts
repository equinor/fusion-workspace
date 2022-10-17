import { Observable, OnchangeCallback } from '@equinor/workspace-core';
import { FetchData } from '../types';

export class FetchController<TData> {
	private fetch: FetchData<TData>;

	/** Returns true if it aborted an api call */
	abort = (): boolean => {
		if (this.currAbort) {
			this.currAbort();
			return true;
		}
		return false;
	};

	private currAbort?: () => void;

	constructor(fetch: FetchData<TData>) {
		this.fetch = fetch;
		const fetching = new Observable<boolean>(this.isFetching, (a, b) => a === b);
		this.onIsFetchingChanged = fetching.onchange;
		this.setIsFetching = fetching.setValue;
		fetching.onchange((val) => {
			this.isFetching = val;
		});

		const loading = new Observable<boolean>(this.isLoading, (a, b) => a === b);
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
		this.currAbort = abort;
		if (!this.data) {
			this.setIsLoading(true);
		}
		this.setIsFetching(true);
		try {
			const promise = this.fetch(signal);
			this.dataPromise = promise;
			this.setData(await promise);
			//Throwing the error further up the chain as it is not to be handled here, states still needs to be reset
			// eslint-disable-next-line no-useless-catch
		} catch (e) {
			throw e;
		} finally {
			this.setIsFetching(false);
			this.setIsLoading(false);
			this.dataPromise = undefined;
			this.currAbort = undefined;
		}

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

	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
