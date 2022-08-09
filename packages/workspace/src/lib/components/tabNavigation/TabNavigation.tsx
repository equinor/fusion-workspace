import { Button } from '@equinor/eds-core-react';
import { Tab } from '../../types';


interface TabNavigationProps<TabNames extends string>{
    tabs: Tab<TabNames>[];
    setActiveTab: (tabName: TabNames) => void;
}

/**
 * Navigation bar in the workspace header.
 * Allows for switching of tabs
 */
export function TabNavigation<TabNames extends string>({tabs, setActiveTab}: TabNavigationProps<TabNames>) {

    console.log(tabs)
  
    return (
        <div>
            {tabs.map(({ name }) => (
                <Button variant="ghost_icon" onClick={() => setActiveTab(name)} key={name}>
                    {name}
                </Button>
            ))}
        </div>
    );
}
