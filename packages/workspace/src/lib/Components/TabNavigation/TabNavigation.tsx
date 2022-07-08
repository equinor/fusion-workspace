import { Button } from '@equinor/eds-core-react';
import { useWorkspaceController } from '../../Hooks';

export function TabNavigation() {
    const controller = useWorkspaceController();

    return (
        <div>
            {controller.tabs.map(({ name }) => (
                <Button
                    variant="outlined"
                    onClick={() => controller.setActiveTabIndex(name)}
                    key={name}
                >
                    {name}
                </Button>
            ))}
        </div>
    );
}
