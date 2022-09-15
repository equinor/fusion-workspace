import { useControllerContext } from 'packages/workspace-react/src/lib/hooks';
import styled from 'styled-components';

export function TabNavigation() {
	const { tabs } = useControllerContext();

	return (
		<StyledTabButtonRow>
			{tabs.tabs.map((tab) => (
				<span onClick={() => tabs.setActiveTab(tab.name)}>
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
