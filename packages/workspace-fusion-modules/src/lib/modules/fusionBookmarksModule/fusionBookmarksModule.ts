import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { ActionResponse, BookmarkActions } from './types/actions';
import { bookmarksApi } from './utils/bookmarksApi';
import { getFusionClient } from './utils/getClientAsync';
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

async function setup(mediator: FusionMediator<unknown>, appKey: string) {
	mediator.urlService.onUrlChange(checkForBookmarkId);
	mediator.onMount(checkForBookmarkId);

	const bookmarkHandler = (event: MessageEvent<unknown>) => handler(event, mediator, appKey);

	mediator.onMount(() => window.addEventListener('message', bookmarkHandler));
	mediator.onUnMount(() => window.removeEventListener('message', bookmarkHandler));
}

async function handler(event: MessageEvent<unknown>, mediator: FusionMediator<unknown>, appKey: string): Promise<void> {
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
				await handleSave(action.name, mediator, appKey);
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
async function handleApply(bookmarkId: string, mediator: FusionMediator<unknown>) {
	const bookmark = await bookmarksApi.getBookmarkById(bookmarkId);
	//Not ready yet
	// mediator.bookmarkService.apply(bookmark);
}
/**
 * Saves a bookmark from the workspace
 */
async function handleSave(name: string, mediator: FusionMediator<unknown>, appKey: string) {
	const payload = mediator.bookmarkService.capture();

	//Need sourceSystem here
	const bookmarkPayload: BookmarkPayload = {
		appKey,
		name,
		contextId: '???',
		isShared: false,
		payload,
		description: '',
	};
	const client = getFusionClient();

	const response = await (
		await client
	).fetch('/bookmarks', { body: JSON.stringify(bookmarkPayload), method: 'POST' });
	if (!response.ok) throw new Error('Response not ok');
}

const messageHandler = {
	failed: (action: BookmarkActions) => post<ActionResponse<BookmarkActions>>({ status: 'Failed', action }),
	success: (action: BookmarkActions) => post<ActionResponse<BookmarkActions>>({ status: 'Success', action }),
};

interface BookmarkPayload {
	name: string;
	description: string;
	isShared: boolean;
	appKey: string;
	contextId: string;
	payload: unknown;
	sourceSystem?: {
		identifier: string;
		name: string;
		subSystem: string;
	};
}
