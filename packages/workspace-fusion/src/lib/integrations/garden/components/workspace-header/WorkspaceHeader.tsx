import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceHeader } from '../../../../components/Header/WorkspaceHeader';

type GardenWorkspaceHeaderProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
> = {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
};

export function GardenWorkspaceHeader<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>({ controller }: GardenWorkspaceHeaderProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>) {
	return (
		<WorkspaceHeader>
			{/* TODO: Add actions to more_vertical menu */}
			{/* <StyledDivider />
			<TabButton isActive={false}>
				<Icon name="more_vertical" color={tokens.colors.interactive.primary__resting.hex} />
			</TabButton> */}
		</WorkspaceHeader>
	);
}
