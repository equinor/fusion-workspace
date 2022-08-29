import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionMediator } from '../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	controller: FusionMediator<TData, TError>
) {
	const dataSourceController = new DataSourceController(dataFetch);
	dataSourceController.data.onchange(controller.setData);
	dataSourceController.isLoading.onchange(controller.setIsLoading);
	dataSourceController.fetch();
}
