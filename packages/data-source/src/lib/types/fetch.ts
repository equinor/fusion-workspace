/**
 * Function for performing a fetch call
 */
export type FetchDataAsync<TData> = (signal?: AbortSignal) => Promise<TData[]>;
