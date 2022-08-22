import { WorkspaceController } from '../../classes';
import { useActiveTab } from '../../hooks';
import { TabButton, TabButtonList } from './tabNavigation.styles';

interface TabNavigationProps<TabNames extends string, TData, TOnClick, TContext, TError> {
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>;
}

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation<TabNames extends string, TData, TOnClick, TContext, TError>({
	controller,
}: TabNavigationProps<TabNames, TData, TOnClick, TContext, TError>) {
	const {
		activeTab: { setValue: setActiveTab },
		tabs,
	} = controller;
	const activeTab = useActiveTab(controller);

	return (
		<TabButtonList>
			{tabs.map(({ name, HeaderComponent }) => (
				<TabButton isActive={name === activeTab?.name} onClick={() => setActiveTab(name)} key={name}>
					<HeaderComponent />
				</TabButton>
			))}
		</TabButtonList>
	);
}
