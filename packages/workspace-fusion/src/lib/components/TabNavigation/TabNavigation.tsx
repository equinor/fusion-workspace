import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import { TabButton, TabButtonList } from './tabNavigation.styles';

export function TabNavigation() {
	const { tabs } = useControllerContext();
	const activeTab = useActiveTab();
	return (
		<TabButtonList>
			{tabs.tabs.map((tab) => (
				<TabButton isActive={activeTab?.name === tab.name} onClick={() => tabs.setActiveTab(tab.name)}>
					<tab.TabIcon />
				</TabButton>
			))}
		</TabButtonList>
	);
}
