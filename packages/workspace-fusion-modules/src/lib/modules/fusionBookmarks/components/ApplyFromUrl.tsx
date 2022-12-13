import { FusionMediator } from '@equinor/workspace-fusion';
import { ReactNode, useRef } from 'react';
import { BookmarksModuleConfig } from '../module';
import { useQuery } from 'react-query';
import { LoadingWrapper } from './LoadingWrapper';

type BookmarksHookProps = {
	children: ReactNode;
	mediator: FusionMediator<any, any, any>;
} & Required<BookmarksModuleConfig>;

export const BookmarksHook = ({ children, mediator, searchParam, getBookmark }: BookmarksHookProps) => {
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
