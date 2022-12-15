import { DataSourceConfig, FetchData } from '../';

/**
 * Transforms configuration object to data source controller fetch method
 * Will check response codes automatically and throw errors through the mediator
 */
export function createFetchFunction<TData extends Record<PropertyKey, unknown>>(
	options: DataSourceConfig<TData>
): FetchData<TData> {
	return async () => {
		const response = await options.getResponseAsync();
		const data = await (options.responseParser ? options.responseParser(response) : response.json());
		return data;
	};
}
