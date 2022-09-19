import { GridController } from '@workspace/grid';
import { FusionMediator } from '../../types';

export function configureHighlightSelection<TData>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.onSelectionChanged((val) =>
		gridController.selectedNodes.setValue(val.map(({ id }) => id))
	);
}
