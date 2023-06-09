import { Provider } from '@equinor/workspace-react';
import { GridHeader } from './components/GridWorkspaceHeader';
import { GridWrapper } from './components/GridWrapper';
import { GridIcon } from './icons/GridIcon';

import { FusionMediator, FusionWorkspaceModule, GetIdentifier, WorkspaceSidesheets } from '../../lib';
import { FilterState } from '@equinor/workspace-filter';
import { GridOptions } from '@equinor/workspace-ag-grid';

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

    setDefaultColDef(gridConfig.gridOptions, mediator, props.workspaceOptions.getIdentifier);

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
        Component: () => <GridWrapper<any, any, any, FilterState> config={gridConfig} />,
        name: 'grid',
        TabIcon: GridIcon,
        CustomHeader: () => <GridHeader dataSource={props.filterOptions?.dataSource} />,
      },
    };
  },
};

function setDefaultColDef(
  gridOptions: Omit<GridOptions<any>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>,
  mediator: FusionMediator<never, any, WorkspaceSidesheets<any>>,
  getIdentifier: GetIdentifier<any>
) {
  gridOptions.defaultColDef = {
    resizable: true,
    onCellClicked: (a) => {
      const node = { id: getIdentifier(a.data), item: a.data };
      mediator.selectionService.selectedNodes = [node];
    },
  };
}

export default gridModule;
