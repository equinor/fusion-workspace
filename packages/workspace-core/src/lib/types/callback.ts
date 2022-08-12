export type OnchangeCallback<TValue> = (newValue: TValue, oldValue?: TValue) => void;

export interface Callback<TValue> {
	id: number;
	callback: OnchangeCallback<TValue>;
}
