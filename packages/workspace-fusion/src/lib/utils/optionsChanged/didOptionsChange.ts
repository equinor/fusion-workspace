import { WorkspaceConfiguration, WorkspaceProps } from '../../types';
import { didDataSourceOptionsChange } from '../../integrations/data-source/utils/dataSourceChanged';

export function didOptionsChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	newConfig: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>,
	current: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>
) {
	didDataSourceOptionsChange(
		newConfig,
		current.rawOptions.dataOptions,
		current.dataSourceController,
		current.mediator
	);
}
