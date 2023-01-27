import { ContextProviders } from './contextProviders/ContextProviders';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './WorkspaceHeader';
import { Provider, Tab } from '../types';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { StoreApi } from 'zustand';
import { createTabController } from '../utils/tabController';
import { useTabContext } from '../hooks/useTab';

type WorkspaceEvents = {
	onTabChange?: (newTab: Tab) => void;
};

export interface WorkspaceProps {
	defaultTab?: string;
	tabs: Tab[];
	Sidesheet?: () => JSX.Element;
	providers: Provider[];
	events?: WorkspaceEvents;
}

export const TabProvider = createContext<StoreApi<TabController> | null>(null);

export type TabController = {
	activeTab: Tab<string>;
	setActiveTab: (name: string) => void;
	tabs: Tab<string>[];
	setTabs: (tabs: Tab[]) => void;
};

export function Workspace({ tabs, defaultTab, Sidesheet = () => <></>, providers, events }: WorkspaceProps) {
	const [tabController] = useState(createTabController({ defaultTab, tabs }));

	return (
		<WorkspaceWrapper id="workspace_root">
			<TabProvider.Provider key={'tab_controller'} value={tabController}>
				<EventHandler {...events}>
					<ContextProviders providers={providers}>
						<WorkspaceHeader />
						<WorkspaceBody>
							<Sidesheet />
						</WorkspaceBody>
					</ContextProviders>
				</EventHandler>
			</TabProvider.Provider>
		</WorkspaceWrapper>
	);
}

const EventHandler = (props: PropsWithChildren<WorkspaceEvents>) => {
	const tab = useTabContext((s) => s.activeTab);

	useEffect(() => {
		if (!props.onTabChange) return;
		props.onTabChange(tab);
	}, [tab]);

	return <>{props.children}</>;
};
