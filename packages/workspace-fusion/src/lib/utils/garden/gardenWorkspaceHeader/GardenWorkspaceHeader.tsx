import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceHeader } from '../../../components/Header/WorkspaceHeader';

type GardenWorkspaceHeaderProps<TData, TCustomGroupByKeys, TCustomState, TContext> = {
	controller: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>;
};

export function GardenWorkspaceHeader<TData, TCustomGroupByKeys, TCustomState, TContext>({
	controller,
}: GardenWorkspaceHeaderProps<TData, TCustomGroupByKeys, TCustomState, TContext>) {
	return <WorkspaceHeader />;
}
