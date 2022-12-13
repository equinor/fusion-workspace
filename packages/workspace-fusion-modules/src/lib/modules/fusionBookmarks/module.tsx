import { FusionBookmark, FusionMediator, WorkspaceViewController } from '@equinor/workspace-fusion';
import { HeaderContext, useHeaderContext } from '@equinor/workspace-fusion';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { CircularProgress } from '@equinor/eds-core-react';
import { useRef } from 'react';

import { Icon } from '@equinor/eds-core-react';
import { bookmarks } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

Icon.add({ bookmarks });

type BookmarksModuleConfig = {
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
					const context = useHeaderContext();

					return (
						<QueryClientProvider client={queryClient}>
							<HeaderContext.Provider value={{ ...context, BookmarksIcon: HeaderIcon }}>
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

const HeaderIcon = () => {
	return (
		<div
			style={{
				height: '48px',
				width: '48px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}}
		>
			<Icon name="bookmarks" color={tokens.colors.interactive.primary__resting.hex} />
		</div>
	);
};

type BookmarksHookProps = {
	children: ReactNode;
	mediator: FusionMediator<any, any, any>;
} & Required<BookmarksModuleConfig>;

const BookmarksHook = ({ children, mediator, searchParam, getBookmark }: BookmarksHookProps) => {
	const consumed = useRef(false);
	const bookmarkId = new URLSearchParams(window.location.search).get(searchParam);

	const { isLoading } = useQuery({
		enabled: !!bookmarkId,
		queryKey: ['bookmarks', bookmarkId],
		refetchOnWindowFocus: false,
		queryFn: async ({ signal }) => {
			if (!bookmarkId || consumed.current) return;
			consumed.current = true;

			const bm = await getBookmark(bookmarkId, signal);
			if (bm) {
				mediator.bookmarkService.apply(bm);
			}
			return bm;
		},
	});

	if (isLoading) {
		<LoadingWrapper />;
	}

	return <>{children}</>;
};

const LoadingWrapper = () => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<CircularProgress size={48} />
			<p>Loading bookmark...</p>
		</div>
	);
};
