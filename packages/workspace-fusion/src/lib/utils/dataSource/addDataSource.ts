import { FetchController } from '@workspace/data-source';
import { DataFetchAsync, FusionMediator } from '../../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	{ dataService, setIsLoading }: FusionMediator<TData, TError>
) {
	const dataSourceController = new FetchController(dataFetch);
	dataSourceController.onDataChanged(dataService.setData);
	dataSourceController.onIsLoadingChanged(setIsLoading);
	dataSourceController.getDataAsync();
}
