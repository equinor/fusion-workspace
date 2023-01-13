import { ContextProviders } from './contextProviders/ContextProviders';
import { WorkspaceWrapper } from './workspace.styles';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './WorkspaceHeader';
import { Provider, Tab } from '../types';
import { createContext, useContext, useState } from 'react';
import { createStore, StoreApi, useStore } from 'zustand';

export interface WorkspaceProps<TTabName extends string, TError> {
	defaultTab?: string;
	tabs: Tab[];
	Sidesheet?: () => JSX.Element;
	isLoading: boolean;
	providers: Provider[];
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

export function Workspace<TTabNames extends string, TError>({
	tabs,
	defaultTab,
	Sidesheet = () => <></>,
	isLoading,
	providers,
}: WorkspaceProps<TTabNames, TError>) {
	const [tabController] = useState(createTabController({ defaultTab, tabs }));

	return (
		<WorkspaceWrapper id="workspace_root">
			<TabProvider.Provider value={tabController}>
				<ContextProviders providers={providers}>
					<WorkspaceHeader />
					<WorkspaceBody isLoading={isLoading}>
						<Sidesheet />
					</WorkspaceBody>
				</ContextProviders>
			</TabProvider.Provider>
		</WorkspaceWrapper>
	);
}

type CtorArgs = {
	defaultTab?: string;
	tabs: Tab[];
};
function createTabController({ defaultTab, tabs }: CtorArgs): StoreApi<TabController> {
	const activeTab = tabs.find((s) => s.name === defaultTab);
	if (!activeTab) {
		throw new Error('123');
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
