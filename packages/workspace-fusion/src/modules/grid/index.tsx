import { Provider } from '@equinor/workspace-react';
import { GridHeader } from './components/GridWorkspaceHeader';
import { GridWrapper } from './components/GridWrapper';
import { GridIcon } from './icons/GridIcon';

import { FusionWorkspaceModule } from '../../lib';
import { FilterState } from '@equinor/workspace-filter';

/**
 * Adds the module to the workspace
 */
export const gridModule: FusionWorkspaceModule = {
  name: 'AG-grid',
  setup: (props, mediator) => {
    const gridConfig = props.gridOptions;
    props.workspaceOptions.getIdentifier;
    if (!gridConfig) return;
    gridConfig.gridOptions ??= {};

    const provider: Provider = {
      Component: ({ children }) => {
        // useContextService(mediator, gridController);
        // useEffect(bookmarkServiceEffect(gridController, mediator), [mediator]);
        // useEffect(dataChangeEffect(gridController, mediator), [mediator]);
        // useEffect(highlightSelectionEffect(gridController, mediator), [mediator]);
        return <>{children}</>;
      },
      name: 'grid-sync',
    };

    return {
      provider,
      tab: {
        Component: () => (
          <GridWrapper<any, any, any, FilterState>
            getIdentifier={props.workspaceOptions.getIdentifier}
            config={gridConfig}
          />
        ),
        name: 'grid',
        TabIcon: GridIcon,
        CustomHeader: () => <GridHeader dataSource={props.filterOptions?.dataSource} />,
      },
    };
  },
};

export default gridModule;
