import { FusionMediator } from '@equinor/workspace-fusion/src';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { BookmarksModuleConfig } from '../BookmarkModule';

export const useApplyBookmark = (
	{ getBookmark, searchParam }: Required<BookmarksModuleConfig>,
	mediator: FusionMediator<any, any, any>
) => {
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

	return isLoading;
};
