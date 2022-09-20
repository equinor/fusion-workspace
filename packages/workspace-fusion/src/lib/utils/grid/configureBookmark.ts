import { GridController } from '@workspace/grid';
import { FusionMediator, GridBookmark } from '../../types';
import { snapshotGridState } from './snapShotGridState';

export function configureBookmark<TData>(gridController: GridController<TData>, mediator: FusionMediator<TData>) {
	mediator.bookmarkService.registerCapture(() => ({ grid: snapshotGridState(gridController) }));
	mediator.bookmarkService.onApply((state) => state?.grid && applyGridBookmark(state.grid, gridController));
	gridController.onColumnStateChanged(mediator.bookmarkService.capture);
}

function applyGridBookmark<TData>(bookmark: GridBookmark, gridController: GridController<TData>) {
	gridController.selectedNodes.setValue(bookmark.selectedNodes ?? []);
	gridController.setColumnState(bookmark.columnState);
}
