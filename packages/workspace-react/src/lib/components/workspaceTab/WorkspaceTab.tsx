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
		<StyledWorkspaceTab>
			<StyledWorkspaceTabContent>
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
	padding: 1rem 1rem 0 1rem;
`;
