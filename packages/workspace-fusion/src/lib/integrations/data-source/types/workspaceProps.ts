import { DataSourceConfig } from '.';

export type WorkspaceDataSourceProps<TData extends Record<PropertyKey, unknown>> = {
	dataOptions?: DataSourceConfig<TData>;
};
