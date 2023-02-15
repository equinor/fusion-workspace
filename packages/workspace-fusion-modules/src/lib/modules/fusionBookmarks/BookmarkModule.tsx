import { FusionBookmark, FusionMediator, WorkspaceViewController } from '@equinor/workspace-fusion';
import { WorkspaceHeaderComponents, useWorkspaceHeaderComponents } from '@equinor/workspace-fusion';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';

import { BookmarkLoader, HeaderIcon } from './components';

export type BookmarksModuleConfig = {
  searchParam?: string;
  getBookmark: (id: string, signal?: AbortSignal) => Promise<FusionBookmark<any>>;
};

const moduleName = 'bookmarks';

/**
 * Will load bookmarks from url
 */
export function BookmarksModule(config: BookmarksModuleConfig) {
  return {
    name: moduleName,
    setup: (
      mediator: FusionMediator<any, any, any>,
      appKey: string,
      viewController: WorkspaceViewController<any, any>
    ) => {
      viewController.addProvider({
        name: 'Bookmark lifecycle',
        Component: ({ children }) => {
          const context = useWorkspaceHeaderComponents();
          const queryClient = useQueryClient();
          return (
            <QueryClientProvider client={queryClient} contextSharing={true}>
              {/* Injects icon into workspace header */}
              <WorkspaceHeaderComponents.Provider
                value={{
                  ...context,
                  icons: [
                    ...context.icons.filter((s) => s.name !== moduleName),
                    { name: moduleName, Icon: HeaderIcon, placement: 'right' },
                  ],
                }}
              >
                {/* Halts the component while applying bookmark from url */}
                <BookmarkLoader
                  getBookmark={config.getBookmark}
                  searchParam={config?.searchParam ?? 'bookmarkId'}
                  mediator={mediator}
                >
                  {children}
                </BookmarkLoader>
              </WorkspaceHeaderComponents.Provider>
            </QueryClientProvider>
          );
        },
      });
    },
  };
}
