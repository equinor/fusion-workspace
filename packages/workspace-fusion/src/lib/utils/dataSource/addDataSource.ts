import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionMediator } from '../../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	{ dataService, setIsLoading }: FusionMediator<TData, TError>
) {
	const dataSourceController = new DataSourceController(dataFetch);
	dataSourceController.data.onchange(dataService.setData);
	dataSourceController.isLoading.onchange(setIsLoading);
	dataSourceController.fetch();
}
