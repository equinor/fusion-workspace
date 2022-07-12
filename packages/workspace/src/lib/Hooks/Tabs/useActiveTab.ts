import { useState, useEffect } from 'react';
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return tabs.find((s) => s.name === value);
}
