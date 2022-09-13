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
		<div style={{ height: '100%', display: 'grid', gridTemplateRows: 'auto 1fr' }}>
			<ContextProvider controller={controller}>
				<WorkspaceHeader />
				<WorkspaceBody />
			</ContextProvider>
		</div>
	);
}
