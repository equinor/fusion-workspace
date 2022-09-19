import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { bookmarksApi } from './utils/getClientAsync';

/**
 * Persists view state in index db, applies by default on page load
 * Will not load if bookmark is in the url
 */
export const fusionBookmarksModule: FusionWorkspaceModule<any> = {
	name: 'FusionBookmarks',
	setup,
};

async function setup(mediator: FusionMediator<any>, appKey: string) {
	mediator.urlService.onUrlChange(checkForBookmarkId);
	mediator.onMount(checkForBookmarkId);
}

async function checkForBookmarkId() {
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
}
