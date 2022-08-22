import { useActiveTab } from '../../hooks';
import { WorkspaceProps } from '../Workspace';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab<TabNames extends string, TData, TOnClick, TContext, TError>({
	controller,
}: WorkspaceProps<TabNames, TData, TOnClick, TContext, TError>) {
	const tab = useActiveTab(controller);
	if (!tab) return null;
	const { Component } = tab;
	return <Component />;
}
