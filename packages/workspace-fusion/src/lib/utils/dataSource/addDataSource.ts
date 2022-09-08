import { FetchController } from '@workspace/data-source';
import { DataFetchAsync, FusionMediator } from '../../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	{ dataService, setIsLoading }: FusionMediator<TData, TError>
) {
	const dataSourceController = new FetchController(dataFetch);
	dataSourceController.onDataChanged((data) => {
		dataService.setData(data);
		//TEMP: Will be removed once filter is done
		dataService.setFilteredData(data);
	});
	dataSourceController.onIsLoadingChanged((isLoading) => {
		setIsLoading(isLoading);
	});
	dataSourceController.getDataAsync();
}
