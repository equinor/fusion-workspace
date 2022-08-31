import styled from 'styled-components';
import { WorkspaceViewController } from '../classes/workspaceViewController';
import { useMounted } from '../hooks/useMounted';
import { ContextProvider } from './ContextProvider';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './workspaceHeader';
export interface WorkspaceProps<TTabName extends string, TError> {
	controller: WorkspaceViewController<TTabName, TError>;
}

export function Workspace<TTabNames extends string, TError>({ controller }: WorkspaceProps<TTabNames, TError>) {
	useMounted(controller);
	return (
		<StyledWorkspace>
			<ContextProvider controller={controller}>
				<WorkspaceHeader />
				<div>{controller.filter.FilterComponent && <controller.filter.FilterComponent />}</div>
				<WorkspaceBody />
			</ContextProvider>
		</StyledWorkspace>
	);
}

const StyledWorkspace = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: auto auto 1fr;
`;
