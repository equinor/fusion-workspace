export * from './workspaceProps';

export type FetchData<TData> = (signal?: AbortSignal) => TData[] | Promise<TData[]>;

export type { DataSourceConfig };

type DataSourceConfig<TData> = {
	/** Used to invalidate query */
	queryKey?: string[];

	initialData?: TData[];

	/** Function for getting response object from server */
	getResponseAsync?: (signal?: AbortSignal) => Promise<Response>;
	/**
	 * Function for parsing response
	 * Can be omitted if all you do is .json();
	 */
	responseParser?: (response: Response) => TData[] | Promise<TData[]>;
};
