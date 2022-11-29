import { Icon } from '@equinor/eds-core-react';
import { more_vertical } from '@equinor/eds-icons';
Icon.add({ more_vertical });
import { tokens } from '@equinor/eds-tokens';
import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import styled from 'styled-components';
import { TabButton, TabButtonList } from './tabNavigation.styles';

const StyledDivider = styled.hr`
	width: 1px;
	height: auto;
	align-self: stretch;
	background: ${tokens.colors.ui.background__medium.hex};
	border: none;
`;

export function TabNavigation() {
	const { tabController } = useControllerContext();
	const activeTab = useActiveTab();
	return (
		<TabButtonList>
			{tabController.tabs.map((tab) => (
				<TabButton
					title={tab.name}
					key={tab.name}
					isActive={activeTab?.name === tab.name}
					onClick={() => tabController.setActiveTab(tab.name)}
				>
					<tab.TabIcon />
				</TabButton>
			))}
			<StyledDivider />
			<TabButton isActive={false}>
				<Icon name="more_vertical" color={tokens.colors.interactive.primary__resting.hex} />
			</TabButton>
		</TabButtonList>
	);
}
