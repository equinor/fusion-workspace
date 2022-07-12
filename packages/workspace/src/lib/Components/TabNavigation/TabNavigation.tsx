import { Button } from '@equinor/eds-core-react';
import { useWorkspaceController } from '../../Hooks';

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation() {
    const { setActiveTabIndex, tabs } = useWorkspaceController();

    return (
        <div>
            {tabs.map(({ name }) => (
                <Button variant="ghost_icon" onClick={() => setActiveTabIndex(name)} key={name}>
                    {name}
                </Button>
            ))}
        </div>
    );
}
