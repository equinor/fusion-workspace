import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { GridController } from '@equinor/workspace-ag-grid';
import { TabButton } from '../../../../components/TabNavigation/tabNavigation.styles';
import styled from 'styled-components';
import { WorkspaceHeader } from '../../../../components/Header/WorkspaceHeader';

type GridHeaderProps<TData extends Record<PropertyKey, unknown>> = {
	controller: GridController<TData>;
};

const StyledDivider = styled.hr`
	width: 1px;
	height: auto;
	align-self: stretch;
	background: ${tokens.colors.ui.background__medium.hex};
	border: none;
`;

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
