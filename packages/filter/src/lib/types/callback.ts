export interface Callback<TCallback> {
    id: string;
    callback: TCallback;
}

export interface OnCallbackSet {
    id: string;
    unSubscribe: () => void;
} 
