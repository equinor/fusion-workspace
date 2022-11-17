import { createFetchFunction } from '../../../utils/dataSource/createFetchFunction';
import { FusionMediator, WorkspaceConfiguration } from '../../../types';
import { FetchController } from '@equinor/workspace-data-source';
import { DataSourceConfig } from 'lib/integrations/data-source';

/**
 * Refetch data if data source options changed
 * //Triggers if getResponseAsync gets a new reference
 */
export function didDataSourceOptionsChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	current: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>,
	previous: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>
) {
	if (!previous.dataSourceController) return;
	const dataSourceController = previous.dataSourceController;

	/** Check if fetch function got a new reference */
	if (current.rawOptions.dataOptions?.getResponseAsync !== previous.rawOptions.dataOptions?.getResponseAsync) {
		/** Only react if there is new dataoptions, removing dataoptions is not currently supported */
		if (current.rawOptions.dataOptions) {
			handleDataSourceChanged(dataSourceController, current.rawOptions.dataOptions, previous.mediator);
		}
	}
}

function handleDataSourceChanged<TData extends Record<PropertyKey, unknown>>(
	dataSourceController: FetchController<TData>,
	dataOptions: DataSourceConfig<TData>,
	mediator: FusionMediator<TData>
) {
	dataSourceController.setFetch(createFetchFunction(dataOptions, mediator));
	dataSourceController.reset();
	dataSourceController.getDataAsync();
}
