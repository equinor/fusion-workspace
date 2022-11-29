import { useActiveTab } from '../../hooks';
import { ActionBar } from '../ActionBar';
import styled from 'styled-components';

export function WorkspaceHeader() {
	const tab = useActiveTab();
	if (!tab || !tab.CustomHeader) return <ActionBar />;

	return (
		<StyledWorkspaceHeader>
			<tab.CustomHeader />
		</StyledWorkspaceHeader>
	);
}

const StyledWorkspaceHeader = styled.div`
	padding-top: 24px;
`;
