import { createContext, type PropsWithChildren, useState, useEffect, useCallback } from 'react';
import { type Selection } from '../types/selection';
import { GetIdentifier } from '../types';

export const WorkspaceControllerContext = createContext<WorkspaceControllerContextType<unknown> | null>(null);

export function WorkspaceControllerContextProvider<T>(props: PropsWithChildren<{ getIdentifier: GetIdentifier<T> }>) {
  const [selection, setSelected] = useState<Selection<T> | null>(getItemIdFromUrl());

  const clearSelection = useCallback(() => setSelected(null), [setSelected]);
  const selectById = useCallback((id: string) => setSelected({ id: id, item: null }), [setSelected]);
  const selectItem = useCallback(
    (item: T) => setSelected({ id: props.getIdentifier(item), item: item }),
    [setSelected]
  );

  useEffect(() => {
    onSelectedChange(selection);
  }, [selection]);

  return (
    <WorkspaceControllerContext.Provider
      value={{
        clearSelection,
        selectById,
        selectItem: selectItem as (item: unknown) => void,
        selection,
      }}
    >
      {props.children}
    </WorkspaceControllerContext.Provider>
  );
}

function getItemIdFromUrl<T>(): Selection<T> | null {
  const url = new URL(window.location.toString());
  const itemId = url.searchParams.get('item');
  if (!itemId) return null;
  return { id: itemId, item: null };
}

type WorkspaceControllerContextType<T> = {
  selection: Selection<T> | null;
  clearSelection: VoidFunction;
  selectById: (id: string) => void;
  selectItem: (item: T) => void;
};

/**
 * Update url when a selection event occurs
 */
const onSelectedChange = <T,>(selectionEvent: Selection<T> | null) => {
  const url = new URL(window.location.toString());
  if (selectionEvent) {
    url.searchParams.set('item', selectionEvent?.id);
  } else {
    url.searchParams.delete('item');
  }
  window.history.replaceState(undefined, '', url);
};
