import { createObservableProxy } from '@equinor/workspace-observable-proxy';

export const createDataService = <TData>() =>
	createObservableProxy<{ data: TData[] | undefined; filteredData: TData[] | undefined }>({
		data: undefined,
		filteredData: undefined,
	});
