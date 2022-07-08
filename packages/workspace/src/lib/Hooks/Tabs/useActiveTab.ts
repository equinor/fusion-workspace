import { useState, useEffect, useMemo } from 'react';
import { useWorkspaceController } from '../useWorkspaceController';

/**
 * Returns the current active tab.
 * Wrapped in useMemo
 * @returns
 */
export function useActiveTab() {
    const { tabs, activeTab, onTabChanged } = useWorkspaceController();
    const [value, setValue] = useState(activeTab);

    useEffect(() => {
        onTabChanged(setValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return useMemo(() => {
        return tabs.find((s) => s.name === activeTab);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, value]);
}
