import { ActionBar } from '../ActionBar';
import { AppNameHeader } from '../AppNameHeader';

/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader() {
	return (
		<div>
			<AppNameHeader />
			<ActionBar />
		</div>
	);
}
