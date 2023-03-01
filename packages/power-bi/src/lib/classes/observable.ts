import { Callback, CompareFunc, OnchangeCallback } from '../types';

/** Converts a value into an observable value */
export class Observable<TValue> {
  constructor(initialValue?: TValue, compareFunc?: CompareFunc<TValue>) {
    this.value = initialValue;
    compareFunc && (this.compareFunc = compareFunc);
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
    if (this.compareFunc(value, oldValue)) return;
    this.value = value;
    this.#onchangeCallbacks.forEach(({ callback }) => callback(value, oldValue));
  };

  /** The value */
  value?: TValue;

  /** Prevents setting of identical values
   * return false if the old value is different from the new value
   * return true to prevent a new value from being set
   */
  compareFunc: CompareFunc<TValue> = () => false;
}
