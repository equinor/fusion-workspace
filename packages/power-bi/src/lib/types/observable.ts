export type OnchangeCallback<TValue> = (newValue: TValue, oldValue?: TValue) => void;

/** Stores the callback under a numbered id as functions cant be uniquely identified */
export interface Callback<TValue> {
  id: number;
  callback: OnchangeCallback<TValue>;
}

/** Function signature for checking whether two values are equal */
export type CompareFunc<TValue> = (a?: TValue, b?: TValue) => boolean;
