export type FetchData<TData> = (signal?: AbortSignal) => TData[] | Promise<TData[]>;
