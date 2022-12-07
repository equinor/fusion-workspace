import { GridController } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, GridBookmark } from '../../../types';
import { snapshotGridState } from './snapShotGridState';

export function configureBookmark<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	mediator.bookmarkService.registerCapture(() => ({ grid: snapshotGridState(gridController) }));
	mediator.bookmarkService.apply$.subscribe((state) => state?.grid && applyGridBookmark(state.grid, gridController));
	gridController.columnState$.subscribe(mediator.bookmarkService.capture);
}

function applyGridBookmark<TData extends Record<PropertyKey, unknown>>(
	bookmark: GridBookmark,
	gridController: GridController<TData>
) {
	gridController.selectedNodes = bookmark.selectedNodes ?? [];
	gridController.columnState = bookmark.columnState;
}
