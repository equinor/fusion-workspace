import { TabController, TabProvider } from '../components/Workspace';
import { useContext } from 'react';
import { useStore } from 'zustand';

export const useTabContext = <U>(selector: (s: TabController) => U): U => {
	const storeApi = useContext(TabProvider);
	if (!storeApi) {
		throw new Error('TabContext out of bounds');
	}
	return useStore(storeApi, selector);
};

export const useTabs = () => useTabContext((s) => s.tabs);
export const useSetActiveTab = () => useTabContext((s) => s.setActiveTab);
export const useActiveTab = () => useTabContext((s) => s.activeTab);
