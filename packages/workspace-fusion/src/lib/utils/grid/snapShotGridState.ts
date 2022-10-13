import { GridController } from '@workspace/grid';
import { GridBookmark } from '../../types';

export function snapshotGridState<TData extends Record<PropertyKey, unknown>>(
	gridController: GridController<TData>
): GridBookmark {
	return {
		selectedNodes: gridController.selectedNodes,
		columnState: gridController.columnState,
	};
}
