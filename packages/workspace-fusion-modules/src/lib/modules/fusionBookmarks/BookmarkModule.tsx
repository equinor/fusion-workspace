import { FusionBookmark, FusionMediator, WorkspaceViewController } from '@equinor/workspace-fusion';
import { HeaderContext, useWorkspaceHeaderComponents } from '@equinor/workspace-fusion';
import { QueryClient, QueryClientProvider } from 'react-query';

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
	const queryClient = new QueryClient();

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

					return (
						<QueryClientProvider client={queryClient}>
							{/* Injects icon into workspace header */}
							<HeaderContext.Provider
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
							</HeaderContext.Provider>
						</QueryClientProvider>
					);
				},
			});
		},
	};
}
