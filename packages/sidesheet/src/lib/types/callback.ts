export interface OnCallbackSet {
    id: string;
    unSubscribe: () => void;
}

export interface Callback<T> {
    id: string;
    callback: T;
}
