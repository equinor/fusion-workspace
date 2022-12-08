import { FetchController } from '@equinor/workspace-data-source';
import { FusionMediator } from '../../../types';
import { DataSourceConfig } from '../';
import { createFetchFunction } from './createFetchFunction';
import { BaseEvent } from '@equinor/workspace-core';

export function addDataSource<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(dataFetch: DataSourceConfig<TData> | undefined, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	if (!dataFetch) return;
	const { dataService, setIsLoading } = mediator;
	const fetchFunction = createFetchFunction(dataFetch, mediator);

	const dataSourceController = new FetchController<TData>(fetchFunction);

	dataSourceController.onDataChanged((newData) => {
		dataService.data = newData;
	});
	dataSourceController.onIsLoadingChanged(setIsLoading);

	dataSourceController.getDataAsync();

	//Mediator ondestroy
	return dataSourceController;
}
