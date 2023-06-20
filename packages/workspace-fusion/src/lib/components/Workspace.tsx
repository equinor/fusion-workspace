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
import { skip } from 'rxjs';
import { WorkspaceControllerContextProvider } from '../context/WorkspaceControllerContext';

const client = new QueryClient();

export function Workspace<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents>) {
  return (
    <WorkspaceBoundary>
      <WorkspaceControllerContextProvider>
        <WorkspaceComponent {...props} />
      </WorkspaceControllerContextProvider>
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

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider
        styles={props.filterOptions?.styles}
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
