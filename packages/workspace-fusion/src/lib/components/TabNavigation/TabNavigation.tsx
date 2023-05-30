import { Icon } from '@equinor/eds-core-react';
import { more_vertical } from '@equinor/eds-icons';
Icon.add({ more_vertical });
import { useActiveTab, useSetActiveTab, useTabs } from '@equinor/workspace-react';
import { ReactNode } from 'react';
import { TabButton, TabButtonList } from './tabNavigation.styles';

type TabNavigationProps = {
  children?: ReactNode;
};

export function TabNavigation({ children }: TabNavigationProps) {
  const set = useSetActiveTab();
  const activeTab = useActiveTab();
  const tabs = useTabs();
  return (
    <TabButtonList id="fusion_workspace_tab_navigation">
      {tabs.map((tab) => (
        <TabButton
          title={tab.name}
          key={tab.name}
          isActive={activeTab?.name === tab.name}
          onClick={() => set(tab.name)}
        >
          <tab.TabIcon />
        </TabButton>
      ))}
      {children}
    </TabButtonList>
  );
}
