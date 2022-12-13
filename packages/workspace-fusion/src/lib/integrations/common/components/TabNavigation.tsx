import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../../types';
import { TabButtonDivider, TabButtonList, TabButton } from '../../../components/Header';
import { useHeaderContext } from '../../../context/headerContext';

export const TabNavigation = () => {
	const { BookmarksIcon, CreateIcon, analyticsTabs, viewTabs } = useHeaderContext();

	const { tabController } = useControllerContext<WorkspaceTabNames, unknown>();

	const activeTab = useActiveTab();
	return (
		<TabButtonList>
			{CreateIcon && (
				<>
					<CreateIcon />
					<TabButtonDivider />
				</>
			)}

			{!!analyticsTabs.length && (
				<>
					{analyticsTabs.map((s) => (
						<TabButton
							isActive={s.name === activeTab?.name}
							onClick={() => tabController.setActiveTab(s.name as WorkspaceTabNames)}
						>
							<s.TabIcon />
						</TabButton>
					))}
					<TabButtonDivider />
				</>
			)}

			{!!viewTabs.length && (
				<>
					{viewTabs.map(({ name, TabIcon }) => (
						<TabButton
							isActive={activeTab?.name === name}
							key={name}
							onClick={() => tabController.setActiveTab(name as WorkspaceTabNames)}
						>
							<TabIcon />
						</TabButton>
					))}
					<TabButtonDivider />
				</>
			)}

			{BookmarksIcon && <BookmarksIcon />}
		</TabButtonList>
	);
};
