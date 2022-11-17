import { createFetchFunction } from '../../../utils/dataSource/createFetchFunction';
import { WorkspaceConfiguration } from '../../../types';

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
			dataSourceController.setFetch(createFetchFunction(current.rawOptions.dataOptions, previous.mediator));
			dataSourceController.reset();
			dataSourceController.getDataAsync();
		}
	}
}
