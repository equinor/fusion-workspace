import { WorkspaceViewController } from '../classes/workspaceViewController';
import { useMounted } from '../hooks/useMounted';
import { ContextProvider } from './ContextProvider';
import { ContextProviders } from './contextProviders/ContextProviders';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './WorkspaceHeader';
export interface WorkspaceProps<TTabName extends string, TError> {
	controller: WorkspaceViewController<TTabName, TError>;
}

export function Workspace<TTabNames extends string, TError>({ controller }: WorkspaceProps<TTabNames, TError>) {
	useMounted(controller);
	return (
		<WorkspaceWrapper>
			<ContextProvider controller={controller}>
				<ContextProviders>
					<WorkspaceHeader />
					<WorkspaceBody />
				</ContextProviders>
			</ContextProvider>
		</WorkspaceWrapper>
	);
}
