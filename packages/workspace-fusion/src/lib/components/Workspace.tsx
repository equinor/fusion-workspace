import { Workspace as WorkspaceView } from '@equinor/workspace-react';
import { WorkspaceMediator } from '@equinor/workspace-core';
import { FusionMediator, WorkspaceProps, WorkspaceSidesheets } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { BaseEvent } from '@equinor/workspace-core';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { WorkspaceBoundary } from './error';
import { useEffect, useState } from 'react';
import { FilterContextProvider } from '@equinor/workspace-filter';
import { updateQueryParams } from '../classes/fusionUrlHandler';
import history from 'history/browser';
import { DetailSidesheetEvent } from '../integrations/sidesheet';

const client = new QueryClient();

export function Workspace<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents>) {
  return (
    <WorkspaceBoundary>
      <WorkspaceComponent {...props} />
    </WorkspaceBoundary>
  );
}

/** Tries to use the surrounding queryClient if there is one, otherwise it creates a new one */
function useCheckParentClient(): QueryClient {
  try {
    return useQueryClient();
  } catch {
    return client;
  }
}

function WorkspaceComponent<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = WorkspaceSidesheets<TData>
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents>) {
  const client = useCheckParentClient();
  const [mediator] = useState<FusionMediator<never, TContext, TCustomSidesheetEvents>>(new WorkspaceMediator());

  const configuration = createConfigurationObject(props, mediator);

  useSelectIdFromUrl(mediator, !!props?.sidesheetOptions?.preventLoadFromUrl);
  useSyncOnClick(mediator);
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider
        defaultUncheckedValues={
          props.currentBookmark?.payload.filter?.uncheckedValues ?? props.filterOptions?.defaultUncheckedValues
        }
      >
        <WorkspaceView
          Sidesheet={configuration.Sidesheet}
          providers={configuration.providers}
          defaultTab={configuration.defaultTab}
          tabs={configuration.tabs}
          events={{
            onTabChange: (newTab) => {
              updateQueryParams([['tab', newTab]], mediator, history);
            },
          }}
        />
      </FilterContextProvider>
    </QueryClientProvider>
  );
}

function useSyncOnClick(mediator: FusionMediator<any, any, any>) {
  useEffect(() => {
    const subscription = mediator.selectionService.selectedNodes$.subscribe((s) => {
      const id = s.length >= 1 ? s[0].id : undefined;
      updateQueryParams([['item', id]], mediator, history);
    });
    return () => subscription.unsubscribe();
  }, [mediator]);
}

/**
 * Triggers sidesheet load if url contains query param item
 */
function useSelectIdFromUrl<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = WorkspaceSidesheets<TData>
>(mediator: FusionMediator<never, TContext, TCustomSidesheetEvents>, preventLoadFromUrl: boolean) {
  useEffect(() => {
    const params = new URL(window.location.toString());
    const id = params.searchParams.get('item');

    if (id && id.length && !preventLoadFromUrl) {
      console.debug(`Id detected, spawning sidesheet: ${id}`);
      const ev: DetailSidesheetEvent<TData> = {
        /**Item is not present since loading from url */
        props: { id, item: undefined },
        type: 'details_sidesheet',
      };
      mediator.sidesheetService.sendEvent(ev as DetailSidesheetEvent<never>);
    }
  }, [mediator]);
}
