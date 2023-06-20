import { FilterState } from '@equinor/workspace-filter';
import { Provider } from '@equinor/workspace-react';
import { FusionWorkspaceModule } from '../../lib';
import { GardenWorkspaceHeader, GardenWrapper } from './components';
import { GardenIcon } from './icons/GardenIcon';

export const gardenModule: FusionWorkspaceModule = {
  name: 'garden',
  setup: (props) => {
    const gardenConfig = props.gardenOptions;

    if (!gardenConfig) return;

    const bookmarkGrouping = props.currentBookmark?.payload?.garden?.gardenKey;
    if (bookmarkGrouping) {
      gardenConfig.initialGrouping = {
        horizontalGroupingAccessor: bookmarkGrouping,
        verticalGroupingKeys: [],
      };
    }

    const provider: Provider = {
      Component: ({ children }) => {
        return <>{children}</>;
      },
      name: 'garden-sync',
    };

    return {
      provider,
      tab: {
        Component: () => (
          <GardenWrapper<any, FilterState> config={gardenConfig} getIdentifier={props.workspaceOptions.getIdentifier} />
        ),
        name: 'garden',
        TabIcon: GardenIcon,
        CustomHeader: () => <GardenWorkspaceHeader dataSource={props.filterOptions?.dataSource} />,
      },
    };
  },
};
