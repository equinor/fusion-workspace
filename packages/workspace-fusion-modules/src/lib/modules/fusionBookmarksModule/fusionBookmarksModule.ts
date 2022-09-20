import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { checkForBookmarkId } from './utils/parseQueryParameters';

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
