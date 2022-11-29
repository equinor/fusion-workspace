import { GridController } from '@equinor/workspace-ag-grid';
import { FusionMediator } from '../../../types';

export function configureHighlightSelection<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext>) {
	mediator.selectionService.selectedNodes$.subscribe((val) => {
		gridController.selectedNodes = val;
	});
}
