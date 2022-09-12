import { FetchData } from '@workspace/data-source';
import { DataSourceOptions, FusionMediator } from '../../types';

/**
 * Transforms configuration object to data source controller fetch method
 * Will check response codes automatically and throw errors through the mediator
 */
export function createFetchFunction<TData, TError>(
	options: DataSourceOptions<TData>,
	mediator: FusionMediator<TData, TError>
): FetchData<TData> {
	const fetch = async () => {
		const response = await options.getResponseAsync();
		if (!response.ok) {
			//TODO: add subscriber to error
			mediator.errorService.throwError('Failed to load data' as unknown as TError);
		}
		const data = await (options.responseParser ? options.responseParser(response) : response.json());
		return data;
	};
	return fetch;
}
