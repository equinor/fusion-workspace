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
		activeTab: activeTab.name,
		setActiveTab: (name: string) => {
			set({ activeTab: name });
		},
	}));

	return store;
}
