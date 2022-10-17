import { GridController } from '@equinor/workspace-grid';
import { FusionMediator } from '../../types';

export function configureHighlightSelection<TData extends Record<PropertyKey, unknown>>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.selectedNodes$.subscribe((val) => {
		gridController.selectedNodes = val;
	});
}
