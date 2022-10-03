import { ProxyGrid } from '@workspace/grid';
import { FusionMediator } from '../../types';

export function configureHighlightSelection<TData extends object>(
	gridController: ProxyGrid<TData>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.onSelectionChanged((val) => {
		// eslint-disable-next-line no-param-reassign
		gridController.selectedNodes = val.map(({ id }) => id);
	});
}
