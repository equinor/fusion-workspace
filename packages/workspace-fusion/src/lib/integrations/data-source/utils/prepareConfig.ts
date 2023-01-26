import { UseQueryOptions } from '@tanstack/react-query';
import { createFetchFunction, DataSourceConfig } from '..';

export function prepareConfig(
	config?: DataSourceConfig<Record<PropertyKey, unknown>>
): UseQueryOptions<unknown, unknown> {
	return {
		queryKey: config?.queryKey ?? ['Workspace'],
		initialData: config?.initialData,
		queryFn: ({ signal }) => {
			const fetch = config ? createFetchFunction(config) : defaultFetchFunction;
			return fetch(signal);
		},
		refetchOnWindowFocus: false,
	};
}

function defaultFetchFunction() {
	console.warn('No fetch function registered');
	return [];
}
