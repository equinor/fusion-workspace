import { FetchController } from '@equinor/workspace-data-source';
import { FusionMediator } from '../../types';
import { DataSourceConfig } from '../../integrations/data-source';
import { createFetchFunction } from './createFetchFunction';

export function addDataSource<TData>(dataFetch: DataSourceConfig<TData>, mediator: FusionMediator<TData>) {
	const { onMount, onUnMount, dataService, setIsLoading } = mediator;
	const fetchFunction = createFetchFunction(dataFetch, mediator);

	const dataSourceController = new FetchController<TData>(fetchFunction);
	dataSourceController.onDataChanged((newData) => {
		dataService.data = newData;
	});
	dataSourceController.onIsLoadingChanged(setIsLoading);

	onMount(dataSourceController.getDataAsync);
	onUnMount(dataSourceController.abort);
	onUnMount(dataSourceController.destroy);
}
