import { GridController } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../lib/types';

export function highlightSelectionEffect<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	return () => {
		const sub = mediator.selectionService.selectedNodes$.subscribe((val) => {
			gridController.selectedNodes = val.map((s) => s.id);
		});
		return () => {
			sub.unsubscribe();
		};
	};
}
