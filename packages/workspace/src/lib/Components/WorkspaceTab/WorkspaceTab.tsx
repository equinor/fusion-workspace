import { useState, useEffect, useMemo } from 'react';
import { useWorkspaceController } from '../../Hooks';

export function WorkspaceTab() {
    const { tabs, activeTab, onTabChanged } = useWorkspaceController();

    const [value, setValue] = useState(activeTab);

    useEffect(() => {
        onTabChanged(setValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const CurrentViewTab = useMemo(() => {
        return tabs.find((s) => s.name === activeTab);
    }, [activeTab, value]);

    return (
        <div>
            {CurrentViewTab && (
                <CurrentViewTab.ViewComponent controller={CurrentViewTab.controller} />
            )}
        </div>
    );
}
