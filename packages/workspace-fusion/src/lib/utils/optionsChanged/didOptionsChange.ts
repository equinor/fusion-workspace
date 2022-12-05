import { WorkspaceConfiguration, WorkspaceProps } from '../../types';
import { didDataSourceOptionsChange } from '../../integrations/data-source/utils/dataSourceChanged';
import { BaseEvent } from '@equinor/workspace-core';

export function didOptionsChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	newConfig: WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>,
	current: WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>
) {
	didDataSourceOptionsChange(
		newConfig,
		current.rawOptions.dataOptions,
		current.dataSourceController,
		current.mediator
	);
}
