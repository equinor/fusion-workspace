import { GardenController } from '@equinor/workspace-garden';
import { Provider, Tab } from '@equinor/workspace-react';
import { GardenConfig, GardenWorkspaceHeader } from '../';
import { GardenIcon } from '../icons/GardenIcon';
import { FusionMediator } from '../../../types';
import { bookmarkEffect } from '../utils/configureBookmarkService';
import { configureClickEvents } from '../utils/configureClickEvents';
import { onDataChangedEffect } from '../utils/configureDataChange';
import { highlightEffect } from '../utils/configureHighlight';
import { GardenWrapper } from './wrapper/GardenWrapper';
import { BaseEvent } from '@equinor/workspace-core';
import { useEffect } from 'react';
import { DataLoader } from '../../../integrations/data-source/components/DataLoader';

export function addGarden<
  TData extends Record<PropertyKey, unknown>,
  TExtendedGardenFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TCustomSidesheetEvents extends BaseEvent = never
>(
  gardenConfig: GardenConfig<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext> | undefined,
  mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): { provider: Provider; tab: Tab } | undefined {
  if (!gardenConfig) return;

  const gardenController = new GardenController<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext>({
    ...gardenConfig,
    data: [],
    getIdentifier: mediator.getIdentifier,
    getContext: () => mediator.contextService.getContext(),
  });

  configureClickEvents(gardenController, mediator);

  const provider: Provider = {
    Component: ({ children }) => {
      useEffect(onDataChangedEffect(gardenController, mediator), [mediator]);
      useEffect(highlightEffect(gardenController, mediator), [mediator]);
      useEffect(bookmarkEffect(gardenController, mediator), [mediator]);

      return <>{children}</>;
    },
    name: 'garden-sync',
  };

  return {
    provider,
    tab: {
      Component: () => (
        <DataLoader>
          <GardenWrapper controller={gardenController} mediator={mediator} />
        </DataLoader>
      ),
      name: 'garden',
      TabIcon: GardenIcon,
      CustomHeader: () => <GardenWorkspaceHeader controller={gardenController} />,
    },
  };
}
