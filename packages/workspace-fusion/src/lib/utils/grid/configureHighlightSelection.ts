import { GridController } from '@equinor/workspace-ag-grid';
import { FusionMediator } from '../../types';

export function configureHighlightSelection<TData extends Record<PropertyKey, unknown>>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.selectedNodes$.subscribe((val) => {
		gridController.selectedNodes = val;
	});
}
