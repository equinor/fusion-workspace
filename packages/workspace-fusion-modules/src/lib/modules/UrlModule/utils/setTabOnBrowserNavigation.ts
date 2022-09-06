import { FusionMediator } from '@equinor/workspace-fusion';
import { Action } from 'history';
import history from 'history/browser';
import { setTabFromUrl } from './setTabFromUrl';

/**Changes tab on browser navigation */
export function setTabOnBrowserNavigation<TData, TError>(mediator: FusionMediator<TData, TError>) {
	history.listen(({ action }) => {
		if (action === Action.Pop) {
			//Navigation back or forward;
			setTabFromUrl(mediator);
		}
	});
}
