import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../../types';
import { TabButtonDivider, TabButtonList, TabButton } from '../../../components/Header';

export const TabNavigation = () => {
	const { tabController } = useControllerContext<WorkspaceTabNames, unknown>();

	const powerBi = tabController.tabs.find((s) => s.name === 'powerbi');
	const tabs = tabController.tabs.filter((s) => s.name !== 'powerbi');
	const activeTab = useActiveTab();
	return (
		<TabButtonList>
			{powerBi && (
				<>
					<TabButton
						isActive={activeTab?.name === powerBi.name}
						onClick={() => tabController.setActiveTab(powerBi.name)}
					>
						<powerBi.TabIcon />
					</TabButton>
					<TabButtonDivider />
				</>
			)}
			{tabs.map(({ name, TabIcon }) => (
				<TabButton
					isActive={activeTab?.name === name}
					key={name}
					onClick={() => tabController.setActiveTab(name)}
				>
					<TabIcon />
				</TabButton>
			))}
		</TabButtonList>
	);
};
