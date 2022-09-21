import { FetchData } from '@workspace/data-source';
import { DataSourceOptions, FusionMediator } from '../../types';

/**
 * Transforms configuration object to data source controller fetch method
 * Will check response codes automatically and throw errors through the mediator
 */
export function createFetchFunction<TData>(
	options: DataSourceOptions<TData>,
	mediator: FusionMediator<TData>
): FetchData<TData> {
	const fetch = async () => {
		try {
			const response = await options.getResponseAsync();
			const data = await (options.responseParser ? options.responseParser(response) : response.json());
			return data;
		} catch (e) {
			mediator.errorService.throwError({ code: 0, detail: 'Something went wrong', title: 'Error' });
		}
		return [];
	};
	return fetch;
}
