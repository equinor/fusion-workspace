import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { ActionResponse, BookmarkActions } from './types/actions';
import { bookmarksApi } from './utils/bookmarksApi';
import { checkForBookmarkId } from './utils/parseQueryParameters';
import { post } from './utils/post';
import { isBookmarkAction } from './utils/typeGuard';

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

	const bookmarkHandler = (event: MessageEvent<any>) => handler(event, mediator);

	mediator.onMount(() => window.addEventListener('message', bookmarkHandler));
	mediator.onUnMount(() => window.removeEventListener('message', bookmarkHandler));
}

async function handler(event: MessageEvent<any>, mediator: FusionMediator<any>): Promise<void> {
	if (!isBookmarkAction(event.data)) return;
	const action = event.data;
	switch (action.type) {
		case 'apply': {
			try {
				await handleApply(action.bookmarkId, mediator);
				messageHandler.success(action);
			} catch (e) {
				messageHandler.failed(action);
			}
			break;
		}

		case 'save': {
			try {
				handleSave(action.name, mediator);
				messageHandler.success(action);
			} catch (e) {
				messageHandler.failed(action);
			}
			break;
		}

		case 'ping': {
			messageHandler.success(action);
			break;
		}

		default:
			messageHandler.failed(action);
			break;
	}
}

/**
 * Applies a bookmark to the workspace
 */
async function handleApply(bookmarkId: string, mediator: FusionMediator<any>) {
	console.log(`applying bookmark with id ${bookmarkId}`);
	const bookmark = await bookmarksApi.getBookmarkById(bookmarkId);
	console.log(bookmark);
}
/**
 * Saves a bookmark from the workspace
 */
async function handleSave(name: string, mediator: FusionMediator<any>) {
	console.log(`Saving bookmark requested ${name}`, mediator.bookmarkService.capture());
}

const messageHandler = {
	failed: (action: BookmarkActions) => post<ActionResponse<BookmarkActions>>({ status: 'Failed', action }),
	success: (action: BookmarkActions) => post<ActionResponse<BookmarkActions>>({ status: 'Success', action }),
};
