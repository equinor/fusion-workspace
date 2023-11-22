import { ContextProviders } from './contextProviders/ContextProviders';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './WorkspaceHeader';
import { Provider, Tab } from '../types';
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { StoreApi } from 'zustand';
import { createTabController } from '../utils/tabController';
import { useTabContext } from '../hooks/useTab';
import styled from 'styled-components';

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
              <StyledSidesheetWrapper>
                <StyledLayoutWrapper>
                  <WorkspaceHeader />
                  <WorkspaceBody />
                  <StyledSurroundingSidesheet id="sidesheet-workspace-wrapper">
                    <Sidesheet />
                  </StyledSurroundingSidesheet>
                </StyledLayoutWrapper>
              </StyledSidesheetWrapper>
            </ContextProviders>
          </EventHandler>
        </TabsProvider.Provider>
      </TabProvider.Provider>
    </WorkspaceWrapper>
  );
}

const StyledSurroundingSidesheet = styled.div`
  grid-area: 1 / 2 / span 2;
  background: white;
  z-index: 2;
`;

const StyledLayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
  height: 100%;
  width: 100%;
`;

const StyledSidesheetWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0px, 1fr) auto; /* set two equal-width columns */
`;

const EventHandler = (props: PropsWithChildren<WorkspaceEvents>) => {
  const { activeTab, setActiveTab } = useTabContext((s) => s);
  const tabs = useContext(TabsProvider);
  useEffect(() => {
    if (!props.onTabChange) return;
    props.onTabChange(activeTab, tabs ?? []);
  }, [activeTab]);

  return <>{props.children}</>;
};
