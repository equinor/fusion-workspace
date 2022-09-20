import { getFusionClient } from '../utils/getClientAsync';

/**
 * Fetches a bookmark with a specific id.
 * @param bookmarkId - GUID
 */
export async function getBookmarkById(bookmarkId: string): Promise<BookmarkResponse> {
	const client = await getFusionClient();
	const res = await client.fetch(`/bookmarks/${bookmarkId}`);
	return await res.json();
}
export type BookmarkResponse<TPayload = unknown> = {
	id: string;
	payload: TPayload;
};
