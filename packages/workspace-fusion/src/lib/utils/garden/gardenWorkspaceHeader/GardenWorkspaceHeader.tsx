import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceHeader } from '../../../components/Header/WorkspaceHeader';

type GardenWorkspaceHeaderProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
> = {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
};

export function GardenWorkspaceHeader<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>({ controller }: GardenWorkspaceHeaderProps<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) {
	return <WorkspaceHeader />;
}
