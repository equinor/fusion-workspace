import { useActiveTab, useSetActiveTab } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../../types';
import { TabButtonDivider, TabButtonList, TabButton } from '../../../components/Header';
import { useWorkspaceHeaderComponents } from '../../../context/WorkspaceHeaderComponents';
import { Fragment, MutableRefObject, useRef } from 'react';

export const TabNavigation = () => {
	const { icons, analyticsTabs, viewTabs } = useWorkspaceHeaderComponents();
	const pRef = useRef<HTMLElement | null>(null);

	const setActiveTab = useSetActiveTab();

	const leftIcons = icons.filter((s) => s.placement === 'left');
	const rightIcons = icons.filter((s) => s.placement === 'right');

	const activeTab = useActiveTab();
	return (
		<TabButtonList ref={pRef as MutableRefObject<HTMLDivElement>} id="button_list">
			{!!leftIcons.length && (
				<>
					{leftIcons.map(({ Icon, name }) => (
						<>
							{pRef.current && (
								<Fragment key={name}>
									<TabButton isActive={false}>
										<Icon anchor={pRef.current} />
									</TabButton>
								</Fragment>
							)}
						</>
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
							onClick={() => setActiveTab(s.name as WorkspaceTabNames)}
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
							onClick={() => setActiveTab(name as WorkspaceTabNames)}
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
						<>
							{pRef.current && (
								<Fragment key={name}>
									<TabButton isActive={false}>
										<Icon anchor={pRef.current} />
									</TabButton>
								</Fragment>
							)}
						</>
					))}
				</>
			)}
		</TabButtonList>
	);
};
