import { GridController } from '@equinor/workspace-grid';
import { WorkspaceHeader } from '../../../components/Header/WorkspaceHeader';

type GridHeaderProps<TData extends Record<PropertyKey, unknown>> = {
	controller: GridController<TData>;
};

export function GridHeader<TData extends Record<PropertyKey, unknown>>({ controller }: GridHeaderProps<TData>) {
	return <WorkspaceHeader />;
}
