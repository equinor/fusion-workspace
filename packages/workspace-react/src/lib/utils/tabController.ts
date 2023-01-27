import { TabController } from '../components/Workspace';
import { Tab } from '../types';
import { StoreApi, createStore } from 'zustand';

type TabControllerArgs = {
	defaultTab?: string;
	tabs: Tab[];
};
export function createTabController({ defaultTab, tabs }: TabControllerArgs): StoreApi<TabController> {
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
