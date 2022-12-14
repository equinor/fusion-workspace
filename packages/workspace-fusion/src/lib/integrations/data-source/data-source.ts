import { FetchData } from '@equinor/workspace-data-source';

export type { DataSourceConfig, FetchData };

type DataSourceConfig<TData> = {
	/** Function for getting response object from server */
	getResponseAsync: (signal?: AbortSignal) => Promise<Response>;
	/**
	 * Function for parsing response
	 * Can be omitted if all you do is .json();
	 */
	responseParser?: (response: Response) => TData[] | Promise<TData[]>;
};
