import { FusionBookmark, FusionMediator, WorkspaceViewController } from '@equinor/workspace-fusion';
import { HeaderContext, useWorkspaceHeaderComponents } from '@equinor/workspace-fusion';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BookmarksHook, HeaderIcon } from './components';

export type BookmarksModuleConfig = {
	searchParam?: string;
	getBookmark: (id: string, signal?: AbortSignal) => Promise<FusionBookmark<any>>;
};

/**
 * Will load bookmarks from url
 */
export function BookmarksModule(config: BookmarksModuleConfig) {
	const queryClient = new QueryClient();

	return {
		name: 'bookmarks',
		setup: (
			mediator: FusionMediator<any, any, any>,
			appKey: string,
			viewController: WorkspaceViewController<any, any>
		) => {
			viewController.addProvider({
				name: 'Bookmark lifecycle',
				Component: ({ children }) => {
					const context = useWorkspaceHeaderComponents();

					return (
						<QueryClientProvider client={queryClient}>
							{/* Injects icon into workspace header */}
							<HeaderContext.Provider value={{ ...context, BookmarksIcon: HeaderIcon }}>
								{/* Halts the component while applying a bookmark from url */}
								<BookmarksHook
									getBookmark={config.getBookmark}
									searchParam={config?.searchParam ?? 'bookmarkId'}
									mediator={mediator}
								>
									{children}
								</BookmarksHook>
							</HeaderContext.Provider>
						</QueryClientProvider>
					);
				},
			});
		},
	};
}
