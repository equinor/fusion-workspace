import { TabNavigation } from '../../integrations/common/components/TabNavigation';
import styled from 'styled-components';
import { StyledActionBar } from './actionBar.styles';
import { WorkspaceComponent } from '../../hooks/useWorkspaceComponents';

export function WorkspaceHeader() {
	return (
		<StyledWorkspaceHeader>
			<NavigationBar />
			<WorkspaceComponent target={'filter'} />
		</StyledWorkspaceHeader>
	);
}

const StyledWorkspaceHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const NavigationBar = () => {
	return (
		<StyledActionBar>
			<WorkspaceComponent target={'header_left'} />
			<TabNavigation />
		</StyledActionBar>
	);
};
