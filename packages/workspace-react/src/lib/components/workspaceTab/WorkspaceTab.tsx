import { useActiveTab } from '../../hooks';
import styled from 'styled-components';
/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab() {
	const tab = useActiveTab();
	if (!tab) return null;
	const { Component } = tab;
	return (
		<StyledWorkspaceTab id="workspace_tab_wrapper">
			<StyledWorkspaceTabContent id="workspace_tab_content">
				<Component />
			</StyledWorkspaceTabContent>
		</StyledWorkspaceTab>
	);
}

const StyledWorkspaceTab = styled.div`
	position: relative;
	width: 100vw;
	overflow: hidden;
`;

const StyledWorkspaceTabContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
