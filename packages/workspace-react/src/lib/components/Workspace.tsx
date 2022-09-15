import { WorkspaceViewController } from '../classes/workspaceViewController';
import { useActiveTab } from '../hooks';
import { useMounted } from '../hooks/useMounted';
import { ActionBar } from './ActionBar';
import { ContextProvider } from './ContextProvider';
import { ContextProviders } from './contextProviders/ContextProviders';
import { TabNavigation } from './tabNavigation';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
export interface WorkspaceProps<TTabName extends string, TError> {
	controller: WorkspaceViewController<TTabName, TError>;
}

export function Workspace<TTabNames extends string, TError>({ controller }: WorkspaceProps<TTabNames, TError>) {
	useMounted(controller);
	return (
		<WorkspaceWrapper>
			<ContextProvider controller={controller}>
				<ContextProviders>
					<Header />
					<WorkspaceBody />
				</ContextProviders>
			</ContextProvider>
		</WorkspaceWrapper>
	);
}

function Header() {
	const tab = useActiveTab();
	if (!tab || !tab.CustomHeader) return <ActionBar />;

	return (
		<div>
			<tab.CustomHeader />
		</div>
	);
}
