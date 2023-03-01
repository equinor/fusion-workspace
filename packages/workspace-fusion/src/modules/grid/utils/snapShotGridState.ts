import { GridController } from '@equinor/workspace-ag-grid';
import { GridBookmark } from '../../../lib';

export function snapshotGridState<TData extends Record<PropertyKey, unknown>>(
  gridController: GridController<TData>
): GridBookmark {
  return {
    selectedNodes: gridController.selectedNodes,
    columnState: gridController.columnState,
  };
}
