export interface OnCallbackSet {
  id: string;
  unsubscribe: () => void;
}

export interface Callback<T> {
  id: string;
  callback: T;
}
