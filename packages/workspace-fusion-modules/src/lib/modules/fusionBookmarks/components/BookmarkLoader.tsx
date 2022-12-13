import { FusionMediator } from '@equinor/workspace-fusion';
import { ReactNode, useRef } from 'react';
import { BookmarksModuleConfig } from '../BookmarkModule';
import { useQuery } from 'react-query';
import { LoadingWrapper } from './LoadingWrapper';

type BookmarkLoaderProps = {
	children: ReactNode;
	mediator: FusionMediator<any, any, any>;
} & Required<BookmarksModuleConfig>;

export const BookmarkLoader = ({ children, mediator, searchParam, getBookmark }: BookmarkLoaderProps) => {
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
