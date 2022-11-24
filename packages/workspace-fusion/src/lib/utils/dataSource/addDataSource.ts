import { FetchController } from '@equinor/workspace-data-source';
import { FusionMediator } from '../../types';
import { DataSourceConfig } from '../../integrations/data-source';
import { createFetchFunction } from './createFetchFunction';

export function addDataSource<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(dataFetch: DataSourceConfig<TData> | undefined, mediator: FusionMediator<TData, TContext>) {
	if (!dataFetch) return;
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

	return dataSourceController;
}
