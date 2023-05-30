import { useTabContext, useTabs } from '../../hooks';
import { TabButton, TabButtonList } from './tabNavigation.styles';

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation() {
  const { activeTab, setActiveTab } = useTabContext((s) => ({
    activeTab: s.activeTab,
    setActiveTab: s.setActiveTab,
  }));

  const tabs = useTabs();

  if (tabs.length <= 1) return null;
  return (
    <TabButtonList>
      {tabs.map(({ name, TabIcon }) => (
        <TabButton
          isActive={name === activeTab}
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
