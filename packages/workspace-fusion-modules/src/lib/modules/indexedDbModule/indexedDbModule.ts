import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import { FusionUserSettings } from './classes/fusionUserSettings';

/**
 * Persists view state in index db, applies by default on page load
 * Will not load if bookmark is in the url
 */
export const IndexedDbModule: FusionWorkspaceModule<any, any> = {
	name: 'IndexedDb',
	setup,
};

async function setup(mediator: FusionMediator<any, any>, appKey: string) {
	const db = new FusionUserSettings<any>();
	mediator.bookmarkService.onCapture((res) => {
		db.save(res, appKey);
	});

	if (!window.location.search.includes('bookmark')) {
		console.log('No bookmark');
		const state = await db.read(appKey);
		if (state) {
			mediator.bookmarkService.apply(state);
		}
	}
}
