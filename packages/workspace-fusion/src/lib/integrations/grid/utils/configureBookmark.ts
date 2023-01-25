import { GridController } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, GridBookmark } from '../../../types';
import { snapshotGridState } from './snapShotGridState';

export function bookmarkServiceEffect<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	return () => {
		mediator.bookmarkService.registerCapture(() => ({ grid: snapshotGridState(gridController) }));
		const sub = mediator.bookmarkService.apply$.subscribe(
			(state) => state?.grid && applyGridBookmark(state.grid, gridController)
		);
		const columnSub = gridController.columnState$.subscribe(mediator.bookmarkService.capture);
		return () => {
			columnSub.unsubscribe();
			sub.unsubscribe();
		};
	};
}

function applyGridBookmark<TData extends Record<PropertyKey, unknown>>(
	bookmark: GridBookmark,
	gridController: GridController<TData>
) {
	gridController.selectedNodes = bookmark.selectedNodes ?? [];
	gridController.columnState = bookmark.columnState;
}
