export * from './workspaceProps';

export type FetchData<TData> = (signal?: AbortSignal) => TData[] | Promise<TData[]>;

export type { DataSourceConfig };

type DataSourceConfig<TData> = {
	/** Used to control query invalidation.
	 *
	 * Defaults to ["Workspace"]
	 * @example
	 * ```TSX
	 * 	const contextId = useContext();
	 * <Workspace
	 * {...}
	 * //Will refetch data when contextId changes
	 * dataSource={{queryKey: ["Workspace", contextId ]}}
	 * />
	 * ```
	 */
	queryKey?: string[];

	initialData?: TData[];

	/**
	 *  Function for getting response object from server
	 *  Implementation will check response code and throw error if response code is not OK.
	 */
	getResponseAsync: (signal?: AbortSignal) => Promise<Response>;
	/**
	 * Function for parsing response
	 * Can be omitted if all you do is .json();
	 */
	responseParser?: (response: Response) => TData[] | Promise<TData[]>;
};
