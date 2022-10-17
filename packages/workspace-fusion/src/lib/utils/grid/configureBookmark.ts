import { GridController } from '@equinor/workspace-grid';
import { FusionMediator, GridBookmark } from '../../types';
import { snapshotGridState } from './snapShotGridState';

export function configureBookmark<TData extends Record<PropertyKey, unknown>>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData>
) {
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
