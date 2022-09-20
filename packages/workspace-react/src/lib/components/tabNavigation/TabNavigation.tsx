import { useActiveTab, useControllerContext } from '../../hooks';
import { TabButton, TabButtonList } from './tabNavigation.styles';

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation() {
	const {
		tabController: { tabs, setActiveTab },
	} = useControllerContext();
	const activeTab = useActiveTab();

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
