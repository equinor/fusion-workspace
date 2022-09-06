import { GridController } from '@workspace/grid';
import { FusionMediator } from '../../types';

export function configureHighlightSelection<TData, TError>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.selection.onSelectionChanged((val) => gridController.selectedNodes.setValue(val.map(({ id }) => id)));
}
