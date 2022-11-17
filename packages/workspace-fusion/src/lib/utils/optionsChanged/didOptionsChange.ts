import { WorkspaceConfiguration } from '../../types';
import { didDataSourceOptionsChange } from './dataSourceOptionsChanged.ts/dataSourceChanged';

export function didOptionsChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	current: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>,
	previous: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>
) {
	didDataSourceOptionsChange(current, previous);
}
