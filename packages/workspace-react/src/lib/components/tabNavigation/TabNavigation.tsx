import { useTabContext } from '../Workspace';
import { TabButton, TabButtonList } from './tabNavigation.styles';

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation() {
	const { activeTab, setActiveTab, tabs } = useTabContext((s) => ({
		tabs: s.tabs,
		activeTab: s.activeTab,
		setActiveTab: s.setActiveTab,
	}));

	if (tabs.length <= 1) return null;
	return (
		<TabButtonList>
			{tabs.map(({ name, TabIcon }) => (
				<TabButton
					isActive={name === activeTab?.name}
					onClick={() => {
						setActiveTab(name);
					}}
					key={name}
				>
					<TabIcon />
				</TabButton>
			))}
		</TabButtonList>
	);
}
