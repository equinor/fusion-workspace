import { useActiveTab } from '../../hooks';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab() {
	const tab = useActiveTab();
	const { Component } = tab;
	return <Component />;
}
