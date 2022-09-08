import { GridController } from '@workspace/grid';
import { GridBookmark } from '../../types';

export function snapshotGridState<TData>(gridController: GridController<TData>): GridBookmark {
	return {
		selectedNodes: gridController.selectedNodes.value,
		columnState: gridController.columnState,
	};
}
