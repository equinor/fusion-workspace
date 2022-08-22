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
