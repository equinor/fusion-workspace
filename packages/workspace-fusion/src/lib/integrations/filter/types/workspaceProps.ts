import { FilterConfig } from '../filter';

export type WorkspaceFilterProps<TData extends Record<PropertyKey, unknown>> = {
	filterOptions?: FilterConfig<TData>;
};
