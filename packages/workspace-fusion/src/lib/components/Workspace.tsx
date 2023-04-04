import { Workspace as WorkspaceView } from '@equinor/workspace-react';
import { WorkspaceProps } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { BaseEvent } from '@equinor/workspace-core';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { tryGetTabFromUrl } from '../classes/fusionUrlHandler';
import { WorkspaceBoundary } from './error';

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
  TCustomSidesheetEvents extends BaseEvent = never
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents>) {
  const client = useCheckParentClient();

  //Probably make one for each?
  const configuration = createConfigurationObject(props);

  return (
    <QueryClientProvider client={client}>
      <WorkspaceView
        Sidesheet={configuration.Sidesheet}
        providers={configuration.providers}
        defaultTab={configuration.tabs.find((s) => s.name === tryGetTabFromUrl())?.name ?? configuration.defaultTab}
        tabs={configuration.tabs}
        events={
          {
            // onTabChange: (newTab) => {
            //   updateQueryParams([['tab', newTab]], history);
            // },
          }
        }
      />
    </QueryClientProvider>
  );
}
