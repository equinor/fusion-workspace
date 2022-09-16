import { useControllerContext } from '@equinor/workspace-react';
import styled from 'styled-components';

export function TabNavigation() {
	const { tabController } = useControllerContext();

	return (
		<StyledTabButtonRow>
			{tabController.tabs.map((tab) => (
				<span onClick={() => tabController.setActiveTab(tab.name)}>
					<tab.TabIcon />
				</span>
			))}
		</StyledTabButtonRow>
	);
}

const StyledTabButtonRow = styled.div`
	display: flex;
	gap: 1em;
`;
