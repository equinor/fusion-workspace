import { GridController } from '@equinor/workspace-ag-grid';
import { WorkspaceHeader } from '../../../../components/Header/WorkspaceHeader';

type GridHeaderProps<TData extends Record<PropertyKey, unknown>> = {
	controller: GridController<TData>;
};

export function GridHeader<TData extends Record<PropertyKey, unknown>>({ controller }: GridHeaderProps<TData>) {
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
