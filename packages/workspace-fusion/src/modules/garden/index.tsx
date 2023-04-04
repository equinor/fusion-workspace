import { FilterGroup } from '@equinor/workspace-filter';
import { GardenController } from '@equinor/workspace-garden';
import { Provider } from '@equinor/workspace-react';
import { FusionWorkspaceModule } from '../../lib';
import { GardenWorkspaceHeader, GardenWrapper } from './components';
import { GardenIcon } from './icons/GardenIcon';

export const gardenModule: FusionWorkspaceModule = {
  name: 'garden',
  setup: (props) => {
    const gardenConfig = props.gardenOptions;

    if (!gardenConfig) return;

    const gardenController = new GardenController<any, FilterGroup[]>({
      ...gardenConfig,
      getIdentifier: props.workspaceOptions.getIdentifier,
      getContext: () => ({}),
      dataSource: {} as any,
    });

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
          <GardenWrapper<any, any, any, any, FilterGroup[]>
            config={gardenConfig}
            getIdentifier={props.workspaceOptions.getIdentifier}
          />
        ),
        name: 'garden',
        TabIcon: GardenIcon,
        CustomHeader: () => (
          <GardenWorkspaceHeader dataSource={props.filterOptions?.dataSource} controller={gardenController} />
        ),
      },
    };
  },
};
