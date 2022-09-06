import { FusionMediator } from '@equinor/workspace-fusion';
import history from 'history/browser';

/** Synchronizes history state with mediator */
export function configureUrlSyncWithMediator<TData, TError>(mediator: FusionMediator<TData, TError>) {
	history.listen(({ location }) => {
		mediator.urlService.setUrl(`${window.location.href}${location.search}`);
	});
}
