import { ContextProviders } from './contextProviders/ContextProviders';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './WorkspaceHeader';
import { Provider, Tab } from '../types';
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { StoreApi } from 'zustand';
import { createTabController } from '../utils/tabController';
import { useTabContext } from '../hooks/useTab';

type WorkspaceEvents = {
  onTabChange?: (newTab: string, tabs: Tab[]) => void;
};

export interface WorkspaceProps {
  defaultTab?: string;
  tabs: Tab[];
  Sidesheet?: () => JSX.Element;
  providers: Provider[];
  events?: WorkspaceEvents;
}

export const TabProvider = createContext<StoreApi<TabController> | null>(null);
export const TabsProvider = createContext<Tab[] | null>(null);

export type TabController = {
  activeTab: string;
  setActiveTab: (name: string) => void;
};

export function Workspace({ tabs, defaultTab, Sidesheet = () => <></>, providers, events }: WorkspaceProps) {
  const tabController = useRef(createTabController({ defaultTab, tabs }));

  return (
    <WorkspaceWrapper id="workspace_root">
      <TabProvider.Provider key={'tab_controller'} value={tabController.current}>
        <TabsProvider.Provider value={tabs}>
          <EventHandler {...events}>
            <ContextProviders providers={providers}>
              <WorkspaceHeader />
              <WorkspaceBody>
                <Sidesheet />
              </WorkspaceBody>
            </ContextProviders>
          </EventHandler>
        </TabsProvider.Provider>
      </TabProvider.Provider>
    </WorkspaceWrapper>
  );
}

const EventHandler = (props: PropsWithChildren<WorkspaceEvents>) => {
  const { activeTab, setActiveTab } = useTabContext((s) => s);
  const tabs = useContext(TabsProvider);
  useEffect(() => {
    if (!props.onTabChange) return;
    props.onTabChange(activeTab, tabs ?? []);
  }, [activeTab]);

  return <>{props.children}</>;
};
