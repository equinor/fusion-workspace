import { TabNavigation } from '../tabNavigation';
import { WorkspaceProps } from '../Workspace';
import { StyledActionBar } from './actionBar.styles';

export function ActionBar<TTabnames extends string, TError>({ controller }: WorkspaceProps<TTabnames, TError>) {
	return (
		<StyledActionBar>
			<div>{controller.StatusBarComponent && <controller.StatusBarComponent />}</div>
			<TabNavigation controller={controller} />
		</StyledActionBar>
	);
}
