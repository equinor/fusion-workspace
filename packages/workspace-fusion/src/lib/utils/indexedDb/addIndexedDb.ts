import { FusionUserSettings } from '../../classes/fusionUserSettings';
import { FusionMediator } from '../../types';

export async function addIndexedDb<TData, TError>(mediator: FusionMediator<TData, TError>) {
	const db = new FusionUserSettings<TData>();
	mediator.bookmarkService.onCapture((res) => db.save(res));

	const state = await db.read();
	if (state) {
		mediator.bookmarkService.apply(state);
	}
}
