import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion/';
import { FusionUserSettings } from './classes/fusionUserSettings';

/**
 * Persists view state in index db, applies by default on page load
 * Will not load if bookmark is in the url
 */
export const IndexedDbModule: FusionWorkspaceModule<any> = {
	name: 'IndexedDb',
	setup,
};

async function setup(mediator: FusionMediator<any>, appKey: string) {
	const db = new FusionUserSettings<any>();
	mediator.bookmarkService.capture$.subscribe((res) => {
		db.save(res, appKey);
	});

	if (!window.location.search.includes('bookmark')) {
		const state = await db.read(appKey);
		if (state) {
			mediator.bookmarkService.apply(state);
		}
	}
}
