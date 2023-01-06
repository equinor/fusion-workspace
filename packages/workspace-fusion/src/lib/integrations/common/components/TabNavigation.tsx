import { useActiveTab, useControllerContext } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../../types';
import { TabButtonDivider, TabButtonList, TabButton } from '../../../components/Header';
import { useWorkspaceHeaderComponents } from '../../../context/WorkspaceHeaderComponents';
import { Fragment } from 'react';

export const TabNavigation = () => {
	const { icons, analyticsTabs, viewTabs } = useWorkspaceHeaderComponents();

	const { tabController } = useControllerContext<WorkspaceTabNames, unknown>();

	const leftIcons = icons.filter((s) => s.placement === 'left');
	const rightIcons = icons.filter((s) => s.placement === 'right');

	const activeTab = useActiveTab();
	return (
		<TabButtonList>
			{!!leftIcons.length && (
				<>
					{leftIcons.map(({ Icon, name }) => (
						<Fragment key={name}>
							<Icon />
						</Fragment>
					))}
					<TabButtonDivider />
				</>
			)}

			{!!analyticsTabs.length && (
				<>
					{analyticsTabs.map((s) => (
						<TabButton
							isActive={s.name === activeTab?.name}
							key={s.name}
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

			{!!rightIcons.length && (
				<>
					{rightIcons.map(({ Icon, name }) => (
						<Fragment key={name}>
							<Icon />
						</Fragment>
					))}
				</>
			)}
		</TabButtonList>
	);
};
