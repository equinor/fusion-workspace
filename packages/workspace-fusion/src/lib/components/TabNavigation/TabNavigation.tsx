import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import { TabButton, TabButtonList } from './tabNavigation.styles';

export function TabNavigation() {
	const { tabController } = useControllerContext();
	const activeTab = useActiveTab();
	return (
		<TabButtonList>
			{tabController.tabs.map((tab) => (
				<TabButton
					key={tab.name}
					isActive={activeTab?.name === tab.name}
					onClick={() => tabController.setActiveTab(tab.name)}
				>
					<tab.TabIcon />
				</TabButton>
			))}
		</TabButtonList>
	);
}
