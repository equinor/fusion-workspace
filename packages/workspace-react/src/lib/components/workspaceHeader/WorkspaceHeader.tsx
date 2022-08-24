import { useControllerContext } from '../../hooks';
import { ActionBar } from '../ActionBar';
import { AppNameHeader } from '../AppNameHeader';

/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader() {
	const controller = useControllerContext();

	return (
		<div>
			<AppNameHeader />
			<ActionBar />
			{controller.FilterComponent && <controller.FilterComponent />}
		</div>
	);
}
