import { useEffect, useState } from 'react';
import { useWorkspaceController } from '../useWorkspaceController';

/**
 * Returns the current active tab.
 * @returns
 */
export function useActiveTab() {
    const { tabs, activeTab, onTabChange } = useWorkspaceController();
    const [value, setValue] = useState(activeTab);

    useEffect(() => {
        onTabChange(setValue);
    }, [onTabChange]);

    return tabs.find((s) => s.name === value);
}
