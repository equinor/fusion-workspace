/** Converts a value into an observable value */
export class Observable<TValue> {
	constructor(initialValue?: TValue) {
		this.value = initialValue;
	}

	isEqual = (a: TValue | undefined, b: TValue): boolean => false;
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
		if (this.isEqual(this.value, value)) return;
		const oldValue = this.value;
		this.value = value;
		this.#onchangeCallbacks.forEach(({ callback }) => callback(value, oldValue));
	};
	/** The value */
	value?: TValue;
}

/** Callback function for when value changes
 * @param newValue The new value
 * @param oldValue The old value
 */
export type OnchangeCallback<TValue> = (newValue: TValue, oldValue?: TValue) => void;

/** Stores the callback under a numbered id as functions cant be uniquely identified */
export interface Callback<TValue> {
	id: number;
	callback: OnchangeCallback<TValue>;
}
