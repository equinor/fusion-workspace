import { useEffect, useState } from 'react';
import { useWorkspaceController } from '../useWorkspaceController';

/**
 * Returns the current active tab.
 * @returns
 */
export function useActiveTab() {
    const { tabs, activeTab, onTabChanged } = useWorkspaceController();
    const [value, setValue] = useState(activeTab);

    useEffect(() => {
        onTabChanged(setValue);
    }, [onTabChanged]);

    return tabs.find((s) => s.name === value);
}
