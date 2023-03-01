import { useActiveTab, useSetActiveTab } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../../types';
import { TabButtonDivider, TabButtonList, TabButton } from '../../../components/Header';
import { useWorkspaceHeaderComponents } from '../../../context/WorkspaceHeaderComponents';
import { Fragment, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';

export const TabNavigation = () => {
	const { icons, analyticsTabs, viewTabs } = useWorkspaceHeaderComponents();
	const pRef = useRef<HTMLElement | null>(null);

	const setActiveTab = useSetActiveTab();

	const leftIcons = icons.filter(({ placement }) => placement === 'left');
	const rightIcons = icons.filter(({ placement }) => placement === 'right');

	const activeTab = useActiveTab();
	return (
		<TabButtonList ref={pRef as MutableRefObject<HTMLDivElement>} id="button_list">
			{!!leftIcons.length && (
				<>
					{leftIcons.map(({ Icon, name, type }) => (
						<>
							{pRef.current && (
								<Fragment key={name}>
									{type === 'button' ? (
										<TabButton isActive={false}>
											<Icon anchor={pRef.current} />
										</TabButton>
									) : (
										<StyledTextWrapper>
											<Icon anchor={pRef.current} />
										</StyledTextWrapper>
									)}
								</Fragment>
							)}
						</>
					))}
					{(!!analyticsTabs.length || !!viewTabs.length || !!rightIcons.length) && <TabButtonDivider />}
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
					{(!!viewTabs.length || !!rightIcons.length) && <TabButtonDivider />}
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
					{!!rightIcons.length && <TabButtonDivider />}
				</>
			)}

			{!!rightIcons.length && (
				<>
					{rightIcons.map(({ Icon, name, type }) => (
						<>
							{pRef.current && (
								<Fragment key={name}>
									{type === 'button' ? (
										<TabButton isActive={false}>
											<Icon anchor={pRef.current} />
										</TabButton>
									) : (
										<StyledTextWrapper>
											<Icon anchor={pRef.current} />
										</StyledTextWrapper>
									)}
								</Fragment>
							)}
						</>
					))}
				</>
			)}
		</TabButtonList>
	);
};

const StyledTextWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
