import { GridController } from '@workspace/grid';
import { WorkspaceHeader } from '../../../components/Header/WorkspaceHeader';

interface GridHeaderProps<TData extends Record<PropertyKey, unknown>> {
	controller: GridController<TData>;
}

export function GridHeader<TData extends Record<PropertyKey, unknown>>({ controller }: GridHeaderProps<TData>) {
	return <WorkspaceHeader />;
}
