import { Workspace as WorkspaceView } from '@equinor/workspace-react';
import { Bookmark, WorkspaceProps } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { WorkspaceBoundary } from './error';
import { FilterContextProvider } from '@equinor/workspace-filter';
import { updateQueryParams } from '../classes/fusionUrlHandler';
import { WorkspaceContextProvider } from '../context/WorkspaceControllerContext';
import { useWorkspace } from '../hooks';
import { useRef } from 'react';
import { update } from '@equinor/eds-icons';

const client = new QueryClient();

export function Workspace<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext>) {
  return (
    <WorkspaceBoundary>
      <WorkspaceContextProvider
        getIdentifier={props.workspaceOptions.getIdentifier}
        onBookmarkChange={props.onBookmarkChange}
      >
        <WorkspaceComponent {...props} />
      </WorkspaceContextProvider>
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
  const bookmarkRef = useRef<Bookmark | null | undefined>(props.currentBookmark);

  const { handleTabChange, updatePayload } = useWorkspace();

  const configuration = createConfigurationObject(bookmarkRef.current ? props : { ...props, currentBookmark: null });

  const filterDataSource = props.filterOptions?.dataSource;

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider
        dataSource={filterDataSource}
        styles={props.filterOptions?.styles}
        initialState={props.currentBookmark?.payload.filter}
        onChange={(val) => {
          updatePayload((p) => ({ ...p, filter: val }));
        }}
      >
        <WorkspaceView
          Sidesheet={configuration.Sidesheet}
          providers={configuration.providers}
          defaultTab={configuration.defaultTab}
          tabs={configuration.tabs}
          events={{
            onTabChange: (newTab) => {
              bookmarkRef.current = null;
              updateQueryParams([['tab', newTab]]);
              handleTabChange(newTab);
            },
          }}
        />
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
