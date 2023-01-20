import { UseQueryOptions } from 'react-query';
import { createFetchFunction, DataSourceConfig } from '..';

export function prepareConfig(
	config?: DataSourceConfig<Record<PropertyKey, unknown>>
): UseQueryOptions<unknown, unknown> {
	return {
		queryKey: config?.queryKey ?? ['Workspace'],
		initialData: config?.initialData,
		retry: 0,
		useErrorBoundary: true,
		suspense: true,
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
