import { useActiveTab } from '../../hooks';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab() {
	const tab = useActiveTab();
	if (!tab) return null;
	const { Component } = tab;
	return (
		<div id={`tab_${tab.name}`}>
			<Component />
		</div>
	);
}
