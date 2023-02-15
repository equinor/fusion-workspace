import { Provider } from '@equinor/workspace-react';
import { createGridController } from '@equinor/workspace-ag-grid';
import { GridIcon } from '../icons/GridIcon';
import { FusionMediator } from '../../../types';
import { bookmarkServiceEffect } from '../utils/configureBookmark';
import { dataChangeEffect } from '../utils/configureDataChange';
import { highlightSelectionEffect } from '../utils/configureHighlightSelection';
import { GridHeader } from './workspaceHeader';
import { setConfigOnController } from '../utils/setConfigOnController';
import { GridConfig } from '../';
import { GridWrapper } from './wrapper';
import { BaseEvent } from '@equinor/workspace-core';
import { useEffect } from 'react';
import { DataLoader } from '../../../integrations/data-source/components/DataLoader';
import { useContextService } from '../hooks/useContextService';

export function addGrid<
  TData extends Record<PropertyKey, unknown>,
  TError,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(gridConfig: GridConfig<TData> | undefined, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
  if (!gridConfig) return;
  const gridController = createGridController<TData, TContext>(mediator.getIdentifier, () => void 0);

  setConfigOnController(gridConfig, gridController, mediator);

  const provider: Provider = {
    Component: ({ children }) => {
      useContextService(mediator, gridController);
      useEffect(bookmarkServiceEffect(gridController, mediator), [mediator]);
      useEffect(dataChangeEffect(gridController, mediator), [mediator]);
      useEffect(highlightSelectionEffect(gridController, mediator), [mediator]);
      return <>{children}</>;
    },
    name: 'grid-sync',
  };

  return {
    provider,
    tab: {
      Component: () => (
        <DataLoader>
          <GridWrapper controller={gridController} mediator={mediator} />
        </DataLoader>
      ),
      name: 'grid',
      TabIcon: GridIcon,
      CustomHeader: () => <GridHeader controller={gridController} />,
    },
  };
}
