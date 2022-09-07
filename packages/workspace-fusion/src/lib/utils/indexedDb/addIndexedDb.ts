import { FusionUserSettings } from '../../classes/fusionUserSettings';
import { FusionMediator } from '../../types';

export async function addIndexedDb<TData, TError>(mediator: FusionMediator<TData, TError>) {
	const db = new FusionUserSettings<TData>();
	mediator.bookmarkService.onCapture((res) => {
		const payload = res;
		delete payload['view'];
		db.save(res);
	});

	if (!window.location.search.includes('bookmark')) {
		console.log('No bookmark');
		const state = await db.read();
		if (state) {
			mediator.bookmarkService.apply(state);
		}
	}
}
