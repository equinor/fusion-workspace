import { DataSourceConfig } from '../data-source';

export type WorkspaceDataSourceProps<TData extends Record<PropertyKey, unknown>> = {
	dataOptions?: DataSourceConfig<TData>;
};
