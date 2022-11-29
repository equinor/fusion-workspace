import { GridConfig } from '../grid';

export type WorkspaceGridProps<TData extends Record<PropertyKey, unknown>> = {
	gridOptions?: GridConfig<TData>;
};
