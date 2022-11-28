import { useActiveTab } from '../../hooks';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab() {
	const tab = useActiveTab();
	if (!tab) return null;
	const { Component } = tab;
	return (
		<div style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '1rem 1rem 0 1rem' }}>
				<Component />
			</div>
		</div>
	);
}
