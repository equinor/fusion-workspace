import { Callback, OnchangeCallback } from '../types';

/** Converts a value into an observable value */
export class Observable<TValue> {
	constructor(initialValue?: TValue) {
		this.value = initialValue;
	}

	/**List of callbacks being stored */
	#onchangeCallbacks: Callback<TValue>[] = [];

	/**
	 * Register a function to be called whenever the value changes
	 * @param callback Function to be called when the value changes
	 */
	onchange = (callback: OnchangeCallback<TValue>) => {
		const id = Math.random() * 16;
		this.#onchangeCallbacks.push({ callback, id });
		return () => {
			this.#onchangeCallbacks = this.#onchangeCallbacks.filter((cb) => cb.id !== id);
		};
	};

	/**
	 * Sets a new value and notifies subscribers
	 * @param value New value to be set
	 */
	setValue = (value: TValue) => {
		const oldValue = this.value;
		this.value = value;
		this.#onchangeCallbacks.forEach(({ callback }) => callback(value, oldValue));
	};
	/** The value */
	value?: TValue;
}
