import { StatusBar } from '../statusBar';
import { TabNavigation } from '../tabNavigation';
import { WorkspaceProps } from '../Workspace';
import { StyledWorkspaceHeader } from './workspaceHeader.styles';

/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader<TTabnames extends string, TError>({ controller }: WorkspaceProps<TTabnames, TError>) {
	return (
		<StyledWorkspaceHeader>
			<StatusBar items={controller.statusBarItems ?? []} />
			<TabNavigation controller={controller} />
			{controller.FilterComponent && <controller.FilterComponent />}
		</StyledWorkspaceHeader>
	);
}
