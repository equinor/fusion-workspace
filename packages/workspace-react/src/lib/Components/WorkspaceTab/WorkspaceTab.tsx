import { useActiveTab } from '../../Hooks/Tabs';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab() {
    const CurrentViewTab = useActiveTab();

    return (
        <div>
            {CurrentViewTab && (
                <CurrentViewTab.ViewComponent controller={CurrentViewTab.controller} />
            )}
        </div>
    );
}
