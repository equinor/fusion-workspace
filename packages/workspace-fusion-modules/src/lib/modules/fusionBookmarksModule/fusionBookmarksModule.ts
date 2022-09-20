import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { ActionResponse } from './types/actions';
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

async function setup(mediator: FusionMediator<any>, appKey: string) {
	mediator.urlService.onUrlChange(checkForBookmarkId);
	mediator.onMount(checkForBookmarkId);

	const bookmarkHandler = (event: MessageEvent<any>) => handler(event, mediator);

	mediator.onMount(() => window.addEventListener('message', bookmarkHandler));
	mediator.onUnMount(() => window.removeEventListener('message', bookmarkHandler));
}

async function handler(event: MessageEvent<any>, mediator: FusionMediator<any>): Promise<void> {
	if (!isBookmarkAction(event.data)) {
		return;
	}
	switch (event.data.type) {
		case 'apply': {
			try {
				await handleApply(event.data.bookmarkId, mediator);
				post<ActionResponse>({ status: 'Success' });
			} catch (e) {
				post<ActionResponse>({ status: 'Failed' });
			}
			break;
		}

		case 'save': {
			try {
				handleSave(event.data.name, mediator);
				post<ActionResponse>({ status: 'Success' });
			} catch (e) {
				post<ActionResponse>({ status: 'Failed' });
			}
			break;
		}

		default:
			break;
	}
}

async function handleApply(bookmarkId: string, mediator: FusionMediator<any>) {
	console.log(`applying bookmark with id ${bookmarkId}`);
	const bookmark = await bookmarksApi.getBookmarkById(bookmarkId);
	console.log(bookmark);
}

async function handleSave(name: string, mediator: FusionMediator<any>) {
	console.log(`Saving bookmark requested ${name}`, mediator.bookmarkService.capture());
}
