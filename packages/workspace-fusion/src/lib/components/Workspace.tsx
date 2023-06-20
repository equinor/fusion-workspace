import { Workspace as WorkspaceView } from '@equinor/workspace-react';
import { WorkspaceProps } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { WorkspaceBoundary } from './error';
import { FilterContextProvider } from '@equinor/workspace-filter';
import { updateQueryParams } from '../classes/fusionUrlHandler';
import { WorkspaceControllerContextProvider } from '../context/WorkspaceControllerContext';

const client = new QueryClient();

export function Workspace<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext>) {
  return (
    <WorkspaceBoundary>
      <WorkspaceControllerContextProvider getIdentifier={props.workspaceOptions.getIdentifier}>
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
  TContext extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext>) {
  const client = useCheckParentClient();

  const configuration = createConfigurationObject(props);

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
              updateQueryParams([['tab', newTab]]);
            },
          }}
        />
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
