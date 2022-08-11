import { WorkspaceViewController } from '../../classes';
import { useActiveTab } from '../../hooks/useActiveTab';
import { TabButton, TabButtonList } from './tabNavigation.styles';

interface TabNavigationProps<TabNames extends string, TError> {
	controller: WorkspaceViewController<TabNames, TError>;
}

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation<TabNames extends string, TError>({ controller }: TabNavigationProps<TabNames, TError>) {
	const { setActiveTab, tabs } = controller;
	const activeTab = useActiveTab(controller);

	return (
		<TabButtonList>
			{tabs.map(({ name }) => (
				<TabButton isActive={name === activeTab?.name} onClick={() => setActiveTab(name)} key={name}>
					{name}
				</TabButton>
			))}
		</TabButtonList>
	);
}
