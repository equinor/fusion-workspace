/**
 * Wrapper for callback in controller class
 */
export interface Callback<TCallback> {
    id: string;
    callback: TCallback;
}

/**
 * Return value for when a callback has been registered
 */
export interface OnCallbackSet {
    id: string;
    unSubscribe: () => void;
}
