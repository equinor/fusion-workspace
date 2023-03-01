/** Class for listening to changes on a value */
export class ReactiveValue<TData> {
  constructor(initValue: TData) {
    this.value = initValue;
  }
  /** Millisecond timestamp for when value last changed */
  changedAt = new Date().getTime();
  /** The value to be stored */
  value: TData;

  private onChangeCallbacks: Callback<TData>[] = [];

  /** Function for setting a new value */
  setValue = (newValue: TData) => {
    const oldValue = this.value;
    this.value = newValue;
    this.changedAt = new Date().getTime();
    this.onChangeCallbacks.forEach(({ callback }) => callback(newValue, oldValue));
  };

  /** Register a function to be called when value changes */
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
