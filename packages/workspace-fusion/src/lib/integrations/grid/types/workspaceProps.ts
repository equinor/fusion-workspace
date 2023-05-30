import { GridConfig } from '../grid';

export type WorkspaceGridProps<TData extends Record<PropertyKey, unknown>, TFilter> = {
  gridOptions?: GridConfig<TData, TFilter>;
};
