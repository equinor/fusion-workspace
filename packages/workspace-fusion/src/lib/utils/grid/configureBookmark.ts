/* eslint-disable no-param-reassign */
import { ProxyGrid } from '@workspace/grid';
import { FusionMediator, GridBookmark } from '../../types';
import { snapshotGridState } from './snapShotGridState';

export function configureBookmark<TData extends object>(
	gridController: ProxyGrid<TData>,
	mediator: FusionMediator<TData>
) {
	mediator.bookmarkService.registerCapture(() => ({ grid: snapshotGridState(gridController) }));
	mediator.bookmarkService.onApply((state) => state?.grid && applyGridBookmark(state.grid, gridController));
	const unsub = gridController.subscribe('columnState', mediator.bookmarkService.capture);
	mediator.onUnMount(unsub);
}

function applyGridBookmark<TData extends object>(bookmark: GridBookmark, gridController: ProxyGrid<TData>) {
	gridController.selectedNodes = bookmark.selectedNodes ?? [];
	gridController.columnState = bookmark.columnState;
}
