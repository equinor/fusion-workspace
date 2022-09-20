import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { bookmarksApi } from './utils/getClientAsync';

/**
 * If bookmarkId is present in the url it will fetch the bookmark from fusion and apply it
 * e.g *.equinor.com?bookmarkId="049c0648-6de2-418d-ac82-ca95531e79a7"
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
	validateBookmark(bookmark);
}

// Design question, is this even necessary. The function recieving the bookmark should maybe be responsible for validating its content.
function validateBookmark(bookmark: any) {
	if (!bookmark) {
		throw new Error('Invalid bookmark, failed to apply');
	}
}
