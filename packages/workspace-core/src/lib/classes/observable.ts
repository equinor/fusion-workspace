import { Callback, OnchangeCallback } from '../types';

export class Observable<TValue> {
	constructor(initialValue?: TValue) {
		this.value = initialValue;
	}

	#onchangeCallbacks: Callback<TValue>[] = [];

	onchange = (callback: OnchangeCallback<TValue>) => {
		const id = Math.random() * 16;
		this.#onchangeCallbacks.push({ callback, id });
		return () => (this.#onchangeCallbacks = this.#onchangeCallbacks.filter((cb) => cb.id !== id));
	};

	setValue = (val: TValue) => {
		const oldValue = this.value;
		this.value = val;
		this.#onchangeCallbacks.forEach(({ callback }) => callback(val, oldValue));
	};

	value?: TValue;
}
