import { Provider } from '@equinor/workspace-react';
import { GridHeader } from './components/GridWorkspaceHeader';
import { GridWrapper } from './components/GridWrapper';
import { GridIcon } from './icons/GridIcon';

import { FusionMediator, FusionWorkspaceModule, GetIdentifier, WorkspaceSidesheets } from '../../lib';
import { FilterStateGroup } from '@equinor/workspace-filter';
import { ColDef, GridOptions } from '@equinor/workspace-ag-grid';

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
    applyClickEvents(gridConfig.gridOptions, mediator, props.workspaceOptions.getIdentifier);

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
        Component: () => <GridWrapper<any, any, any, FilterStateGroup[]> config={gridConfig} />,
        name: 'grid',
        TabIcon: GridIcon,
        CustomHeader: () => <GridHeader dataSource={props.filterOptions?.dataSource} />,
      },
    };
  },
};

function applyClickEvents(
  gridOptions: Omit<GridOptions<any>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>,
  mediator: FusionMediator<never, any, WorkspaceSidesheets<any>>,
  getIdentifier: GetIdentifier<any>
) {
  if (!gridOptions.defaultColDef) {
    setDefaultColDef(gridOptions, mediator, getIdentifier);
    return;
  }

  gridOptions.columnDefs = gridOptions.columnDefs?.map(
    (old): ColDef<any> => ({
      ...old,
      onCellClicked: (a) => (mediator.selectionService.selectedNodes = [{ id: getIdentifier(a.data), item: a.data }]),
    })
  );
}

function setDefaultColDef(
  gridOptions: Omit<GridOptions<any>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>,
  mediator: FusionMediator<never, any, WorkspaceSidesheets<any>>,
  getIdentifier: GetIdentifier<any>
) {
  gridOptions.defaultColDef = {
    resizable: true,
    onCellClicked: (a) => (mediator.selectionService.selectedNodes = [{ id: getIdentifier(a.data), item: a.data }]),
  };
}

export default gridModule;
