import { ContextProviders } from './contextProviders/ContextProviders';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './WorkspaceHeader';
import { Provider, Tab } from '../types';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { createStore, StoreApi, useStore } from 'zustand';

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

const TabProvider = createContext<StoreApi<TabController> | null>(null);

export const useTabContext = <U,>(selector: (s: TabController) => U): U => {
	const storeApi = useContext(TabProvider);
	if (!storeApi) {
		throw new Error('TabContext out of bounds');
	}
	return useStore(storeApi, selector);
};

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

type CtorArgs = {
	defaultTab?: string;
	tabs: Tab[];
};
function createTabController({ defaultTab, tabs }: CtorArgs): StoreApi<TabController> {
	const activeTab = tabs.find((s) => s.name === defaultTab);
	if (!activeTab) {
		throw new Error('No active tab');
	}

	const store = createStore<TabController>((set, get) => ({
		activeTab,
		setActiveTab: (name: string) => {
			const newActiveTab = get().tabs.find((s) => s.name === name);
			if (!newActiveTab) {
				throw new Error('Failed to set activeTab');
			}
			//queryParam patch
			set({ activeTab: newActiveTab });
		},
		tabs,
		setTabs: (tabs: Tab[]) => {
			set({ tabs });
		},
	}));

	return store;
}
