import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionMediator } from '../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	controller: FusionMediator<TData, TError>
) {
	const dataSourceController = new DataSourceController(dataFetch);
	dataSourceController.data.onchange((data) => {
		controller.setData(data);
		//TEMP: Will be removed once filter is done
		controller.setFilteredData(data);
	});
	dataSourceController.isLoading.onchange((isLoading) => {
		controller.setIsLoading(isLoading);
	});
	dataSourceController.fetch();
}
