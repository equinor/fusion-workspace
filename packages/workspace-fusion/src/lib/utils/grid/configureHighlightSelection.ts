import { GridController } from '@workspace/grid';
import { FusionMediator } from '../../types';

export function configureHighlightSelection<TData extends Record<PropertyKey, unknown>>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.onSelectionChanged((val) => {
		gridController.selectedNodes = val.map(({ id }) => id);
	});
}
