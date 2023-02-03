import { TabController, TabProvider, TabsProvider } from '../components/Workspace';
import { useContext } from 'react';
import { useStore } from 'zustand';

export const useTabContext = <U>(selector: (s: TabController) => U): U => {
	const storeApi = useContext(TabProvider);
	if (!storeApi) {
		throw new Error('TabContext out of bounds');
	}
	return useStore(storeApi, selector);
};

export const useTabsContext = () => {
	const context = useContext(TabsProvider);
	if (!context) {
		throw new Error('TabsProvider out of bounds');
	}
	return context;
};

export const useTabs = () => useTabsContext();
export const useSetActiveTab = () => useTabContext((s) => s.setActiveTab);
export const useActiveTab = () => {
	const tabName = useTabContext((s) => s.activeTab);
	return useTabs().find((s) => s.name === tabName);
};
