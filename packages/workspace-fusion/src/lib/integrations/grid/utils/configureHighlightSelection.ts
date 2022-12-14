import { GridController } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../types';

export function configureHighlightSelection<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	mediator.selectionService.selectedNodes$.subscribe((val) => {
		gridController.selectedNodes = val.map((s) => s.id);
	});
}
