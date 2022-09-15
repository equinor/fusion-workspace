import { WorkspaceViewController } from '../classes/workspaceViewController';
import { useActiveTab } from '../hooks';
import { useMounted } from '../hooks/useMounted';
import { ContextProvider } from './ContextProvider';
import { WorkspaceProviders } from './providers/WorkspaceProviders';
import { TabNavigation } from './tabNavigation';
import { WorkspaceBody } from './workspaceBody';
export interface WorkspaceProps<TTabName extends string, TError> {
	controller: WorkspaceViewController<TTabName, TError>;
}

export function Workspace<TTabNames extends string, TError>({ controller }: WorkspaceProps<TTabNames, TError>) {
	useMounted(controller);

	return (
		<div style={{ height: '100%', display: 'grid', gridTemplateRows: 'auto 1fr' }}>
			<ContextProvider controller={controller}>
				<WorkspaceProviders>
					<Header />
					<WorkspaceBody />
				</WorkspaceProviders>
			</ContextProvider>
		</div>
	);
}

function Header() {
	const tab = useActiveTab();
	if (!tab || !tab.CustomHeader)
		return (
			<div>
				<TabNavigation />
			</div>
		);

	return (
		<div>
			<tab.CustomHeader />
		</div>
	);
}
