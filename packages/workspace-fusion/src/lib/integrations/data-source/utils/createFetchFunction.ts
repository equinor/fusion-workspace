import { DataSourceConfig, FetchData } from '../';

/**
 * Transforms configuration object to data source controller fetch method
 * Will check response codes automatically and throw errors through the mediator
 */
export function createFetchFunction<TData extends Record<PropertyKey, unknown>>(
  options?: DataSourceConfig<TData>
): FetchData<TData> {
  const fetchFunction = options?.getResponseAsync;
  if (!fetchFunction) return async () => defaultFetchFunction(options?.initialData);
  return async () => {
    const response = await fetchFunction();
    const data = await (options.responseParser ? options.responseParser(response) : response.json());
    return data;
  };
}

function defaultFetchFunction(data?: any[]) {
  console.warn('No fetch function registered');
  return data ?? [];
}
