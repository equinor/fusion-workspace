import { FusionMediator } from '@equinor/workspace-fusion';
import { updateQueryParams } from './updateQueryParams';

/** Updates url on tab change */
export function updateUrlOnTabChange<TData, TError>(mediator: FusionMediator<TData, TError>) {
	mediator.onTabChange((tab) => {
		updateQueryParams([`tab=${tab}`], mediator);
	});
}
