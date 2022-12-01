import { Icon } from '@equinor/eds-core-react';
import { more_vertical } from '@equinor/eds-icons';
Icon.add({ more_vertical });
import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import { ReactNode } from 'react';
import { TabButton, TabButtonList } from './tabNavigation.styles';

type TabNavigationProps = {
	children?: ReactNode;
};

export function TabNavigation({ children }: TabNavigationProps) {
	const { tabController } = useControllerContext();
	const activeTab = useActiveTab();
	return (
		<TabButtonList id="fusion_workspace_tab_navigation">
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
			{children}
		</TabButtonList>
	);
}
