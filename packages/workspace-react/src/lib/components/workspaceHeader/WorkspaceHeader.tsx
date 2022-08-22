import { ActionBar } from '../ActionBar';
import { AppNameHeader } from '../AppNameHeader';
import { WorkspaceProps } from '../Workspace';

/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader<TTabnames extends string, TData, TOnClick, TContext, TError>({
	controller,
}: WorkspaceProps<TTabnames, TData, TOnClick, TContext, TError>) {
	return (
		<div>
			<AppNameHeader controller={controller}></AppNameHeader>
			<ActionBar controller={controller} />
			{controller.FilterComponent && <controller.FilterComponent />}
		</div>
	);
}
