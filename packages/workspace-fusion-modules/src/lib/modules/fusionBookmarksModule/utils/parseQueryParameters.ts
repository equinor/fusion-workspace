import { bookmarksApi } from './bookmarksApi';
import { validateBookmark } from './validateBookmark';

export async function checkForBookmarkId() {
	const searchParams = location.search.split('&');
	const queryParamMap = new Map(
		searchParams.map((val) => {
			const [topic, value] = val.split('=');
			return [topic, value];
		})
	);

	const bookmarkId = queryParamMap.get('bookmarkId');

	if (!bookmarkId) {
		return;
	}

	const bookmark = await bookmarksApi.getBookmarkById(bookmarkId);
	validateBookmark(bookmark);
}
