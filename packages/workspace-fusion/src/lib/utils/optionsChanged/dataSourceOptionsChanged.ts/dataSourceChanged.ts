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
	if (current.rawOptions.dataOptions?.getResponseAsync !== previous.rawOptions.dataOptions?.getResponseAsync) {
		console.log('Get data reference changed, refetching...');
		previous.dataSourceController?.getDataAsync();
	}
}
