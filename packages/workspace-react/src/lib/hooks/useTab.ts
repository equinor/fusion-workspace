import { useTabContext } from '../components/Workspace';

export const useTabs = () => useTabContext((s) => s.tabs);
export const useSetActiveTab = () => useTabContext((s) => s.setActiveTab);
export const useActiveTab = () => useTabContext((s) => s.activeTab);
