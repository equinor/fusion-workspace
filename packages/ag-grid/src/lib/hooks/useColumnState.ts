import { ColumnApi } from 'ag-grid-community';
import { useEffect } from 'react';
import { GridController } from '../types';
import { applyColumnStateFromGridController } from '../utils';

/** Hook for listening to external column state changes
 * Will trigger when someone calls the controller.setColumnState()
 */
export function useColumnState<T extends Record<PropertyKey, unknown>>(
  controller: GridController<T>,
  columnApi: ColumnApi | undefined
) {
  useEffect(() => {
    if (!columnApi) return;
    const subscription = controller.columnState$.subscribe(() =>
      applyColumnStateFromGridController(controller, columnApi)
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [controller]);
}
