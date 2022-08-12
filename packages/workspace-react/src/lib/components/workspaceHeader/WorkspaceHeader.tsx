import { ActionBar } from '../ActionBar';
import { AppNameHeader } from '../AppNameHeader';
import { WorkspaceProps } from '../Workspace';

/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader<TTabnames extends string, TError>({ controller }: WorkspaceProps<TTabnames, TError>) {
	return (
		<div>
			<AppNameHeader controller={controller}></AppNameHeader>
			<ActionBar controller={controller} />
			{controller.FilterComponent && <controller.FilterComponent />}
		</div>
	);
}
