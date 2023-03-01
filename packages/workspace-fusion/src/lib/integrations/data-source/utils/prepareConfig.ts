import { UseQueryOptions } from '@tanstack/react-query';
import { createFetchFunction, DataSourceConfig } from '..';

export function prepareConfig(
  config: DataSourceConfig<Record<PropertyKey, unknown>> | undefined,
  appKey: string
): UseQueryOptions<unknown, unknown> {
  return {
    queryKey: config?.queryKey ?? ['Workspace', appKey],
    initialData: config?.initialData,
    retry: 0,
    useErrorBoundary: true,
    suspense: true,
    enabled: !!config?.getResponseAsync,
    queryFn: ({ signal }) => {
      const fetch = createFetchFunction(config);
      return fetch(signal);
    },
    refetchOnWindowFocus: false,
  };
}
