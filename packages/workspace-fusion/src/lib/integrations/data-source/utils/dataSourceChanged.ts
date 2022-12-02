import { createFetchFunction } from './createFetchFunction';
import { FusionMediator } from '../../../types';
import { FetchController } from '@equinor/workspace-data-source';
import { DataSourceConfig, WorkspaceDataSourceProps } from '../';
import { BaseEvent } from '@equinor/workspace-core';

/**
 * Refetch data if data source options changed
 * Triggers if getResponseAsync gets a new reference
 */
export function didDataSourceOptionsChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
>(
	newDataOptions: WorkspaceDataSourceProps<TData>,
	oldDataOptions: DataSourceConfig<TData> | undefined,
	dataSourceController: FetchController<TData> | undefined,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	if (!dataSourceController) return;

	/** Check if fetch function got a new reference */
	if (newDataOptions.dataOptions?.getResponseAsync !== oldDataOptions?.getResponseAsync) {
		/** Only react if there is new dataoptions, removing dataoptions is not currently supported */
		if (newDataOptions.dataOptions) {
			handleDataSourceChanged(dataSourceController, newDataOptions.dataOptions, mediator);
		}
	}
}
/**
 * Refetch data if the getResponseAsync function changes
 */
function handleDataSourceChanged<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
>(
	dataSourceController: FetchController<TData>,
	dataOptions: DataSourceConfig<TData>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	dataSourceController.setFetch(createFetchFunction(dataOptions, mediator));
	dataSourceController.reset();
	dataSourceController.getDataAsync();
}
