import { FusionUserSettings } from '../../classes/fusionUserSettings';
import { FusionMediator } from '../../types';

export async function addIndexedDb<TData, TError>(mediator: FusionMediator<TData, TError>, appKey: string) {
	const db = new FusionUserSettings<TData>();
	mediator.bookmarkService.onCapture((res) => {
		const payload = res;
		delete payload['view'];
		db.save(res, appKey);
	});

	if (!window.location.search.includes('bookmark')) {
		const state = await db.read(appKey);
		if (state) {
			mediator.bookmarkService.apply(state);
		}
	}
}
