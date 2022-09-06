import { FusionMediator } from '@equinor/workspace-fusion';
import { updateQueryParams } from './updateQueryParams';

/** Updates query params whenever an onClick event happens */
export function updateQueryParamsOnClick<TData, TError>(mediator: FusionMediator<TData, TError>) {
	mediator.onClick(({ item }) => {
		const id = mediator.getUniqueId(item);
		updateQueryParams([`item=${id}`], mediator);
	});
}
