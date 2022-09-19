import { GridController } from '@workspace/grid';
import { WorkspaceHeader } from '../../../components/Header/WorkspaceHeader';

interface GridHeaderProps<TData> {
	controller: GridController<TData>;
}

export function GridHeader<TData>({ controller }: GridHeaderProps<TData>) {
	return <WorkspaceHeader />;
}
