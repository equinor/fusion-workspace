import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionMediator } from '../../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	{ dataService, setIsLoading }: FusionMediator<TData, TError>
) {
	const dataSourceController = new DataSourceController(dataFetch);
	dataSourceController.data.onchange((data) => {
		dataService.setData(data);
		//TEMP: Will be removed once filter is done
		dataService.setFilteredData(data);
	});
	dataSourceController.isLoading.onchange((isLoading) => {
		setIsLoading(isLoading);
	});
	dataSourceController.fetch();
}
