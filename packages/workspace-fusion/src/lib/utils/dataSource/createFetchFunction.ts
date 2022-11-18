import { FetchData } from '@equinor/workspace-data-source';
import { FusionMediator } from '../../types';
import { DataSourceConfig } from '../../integrations/data-source';

/**
 * Transforms configuration object to data source controller fetch method
 * Will check response codes automatically and throw errors through the mediator
 */
export function createFetchFunction<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(options: DataSourceConfig<TData>, mediator: FusionMediator<TData, TContext>): FetchData<TData> {
	const fetch = async () => {
		try {
			const response = await options.getResponseAsync();
			const data = await (options.responseParser ? options.responseParser(response) : response.json());
			return data;
		} catch (e) {
			mediator.errorService.error({ code: 0, detail: 'Something went wrong', title: 'Error' });
		}
		return [];
	};
	return fetch;
}
