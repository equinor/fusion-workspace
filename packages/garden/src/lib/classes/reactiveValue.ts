/**
 * Class for using js object as react state
 */
export class ReactiveValue<TData> {
	constructor(initValue: TData) {
		this.value = initValue;
	}
	changedAt = 0;
	value: TData;
	onChangeCallbacks: Callback<TData>[] = [];

	setValue = (newValue: TData) => {
		const oldValue = this.value;
		this.value = newValue;
		this.changedAt = new Date().getTime();
		this.onChangeCallbacks.forEach(({ callback }) => callback(newValue, oldValue));
	};

	onChange = (callback: OnValueChangeCallback<TData>) => {
		const id = (Math.random() * 16).toString();
		this.onChangeCallbacks.push({ callback, id });
		return () => {
			this.onChangeCallbacks = this.onChangeCallbacks.filter((cb) => cb.id !== id);
		};
	};
}

interface Callback<TData> {
	id: string;
	callback: OnValueChangeCallback<TData>;
}

type OnValueChangeCallback<TData> = (newValue: TData, oldValue: TData) => void;
