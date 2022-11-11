import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceHeader } from '../../../components/Header/WorkspaceHeader';

type GardenWorkspaceHeaderProps<TData, TExtendedFields extends string, TCustomGroupByKeys, TCustomState, TContext> = {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
};

export function GardenWorkspaceHeader<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys,
	TCustomState,
	TContext
>({ controller }: GardenWorkspaceHeaderProps<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) {
	return <WorkspaceHeader />;
}
