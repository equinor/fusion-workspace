import { createFetchFunction } from '../../../utils/dataSource/createFetchFunction';
import { FusionMediator, WorkspaceConfiguration } from '../../../types';
import { FetchController } from '@equinor/workspace-data-source';
import { DataSourceConfig } from '../../../integrations/data-source';
import { WorkspaceProps } from '../../../components';

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
	newDataOptions: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>,
	current: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>
) {
	if (!current.dataSourceController) return;
	const dataSourceController = current.dataSourceController;

	/** Check if fetch function got a new reference */
	if (newDataOptions.dataOptions?.getResponseAsync !== current.rawOptions.dataOptions?.getResponseAsync) {
		/** Only react if there is new dataoptions, removing dataoptions is not currently supported */
		if (newDataOptions.dataOptions) {
			handleDataSourceChanged(dataSourceController, newDataOptions.dataOptions, current.mediator);
		}
	}
}
/**
 * Refetch data if the getResponseAsync function changes
 */
function handleDataSourceChanged<TData extends Record<PropertyKey, unknown>>(
	dataSourceController: FetchController<TData>,
	dataOptions: DataSourceConfig<TData>,
	mediator: FusionMediator<TData>
) {
	dataSourceController.setFetch(createFetchFunction(dataOptions, mediator));
	dataSourceController.reset();
	dataSourceController.getDataAsync();
}
