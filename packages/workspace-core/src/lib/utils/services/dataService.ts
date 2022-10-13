import { createObservableProxy } from '@equinor/observable-proxy';

export const createDataService = <TData>() =>
	createObservableProxy<{ data: TData[] | undefined; filteredData: TData[] | undefined }>({
		data: undefined,
		filteredData: undefined,
	});
