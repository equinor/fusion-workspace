import { generateUniqueId } from '../utils';
import { FetchDataAsync, OnErrorCallback, OnCallbackSet, Callback } from '../types';
import { Observable } from '@workspace/workspace-core';

export class DataSourceController<TData, TError = unknown> {
	private fetchData: FetchDataAsync<TData>;
	data = new Observable<TData[]>([]);
	private onErrorCallbacks: Callback<OnErrorCallback<TData, TError>>[] = [];

	isLoading = new Observable(false);

	constructor(fetch: FetchDataAsync<TData>) {
		this.fetchData = fetch;
	}

	/**
	 * Fetches data asynchronously and adds it to the data attribute on the controller
	 * @param preventCallbacks If set to true will not notify subscribers that data changed, should not be used
	 * @returns
	 */
	fetch = async (): Promise<TData[]> => {
		if (this.isLoading.value) return [];

		this.isLoading.setValue(true);
		/**
		 * Add try catch and error slot
		 */
		try {
			const data = await this.fetchData();
			this.data.setValue(data);
		} catch (e: unknown) {
			this.isLoading.setValue(false);
			this.throwError(e as TError);
		}
		this.isLoading.setValue(false);
		return this.data.value ?? [];
	};

	private throwError(error: TError) {
		this.onErrorCallbacks.forEach(({ callback }) => callback(error, this));
	}

	/**
	 * Removes the data
	 */
	remove = (): void => {
		this.data.setValue([]);
	};

	/**
	 * Register a callback to be called whenever an error is thrown
	 * @param cb The function to be called upon whenever an error is thrown
	 * @returns The id assigned to the callback(debug purposes), and a function to unsubscribe
	 */
	onErrorThrown = (cb: OnErrorCallback<TData, TError>): OnCallbackSet => {
		const id = generateUniqueId();
		this.onErrorCallbacks.push({ callback: cb, id });
		return {
			id,
			unsubscribe: () => {
				this.onErrorCallbacks = this.onErrorCallbacks.filter((s) => s.id !== id);
			},
		};
	};
}
