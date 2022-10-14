import { FetchController } from '@workspace/data-source';
import { DataSourceOptions, FusionMediator } from '../../types';
import { createFetchFunction } from './createFetchFunction';

export function addDataSource<TData>(dataFetch: DataSourceOptions<TData>, mediator: FusionMediator<TData>) {
	const { onMount, onUnMount, dataService, setIsLoading } = mediator;
	const fetchFunction = createFetchFunction(dataFetch, mediator);

	const dataSourceController = new FetchController<TData>(fetchFunction);
	dataSourceController.onDataChanged((newData) => {
		console.log(dataService);
		dataService.setData(newData, 'DataSource');
	});
	dataSourceController.onIsLoadingChanged(setIsLoading);

	onMount(dataSourceController.getDataAsync);
	onUnMount(dataSourceController.abort);
	onUnMount(dataSourceController.destroy);
}
