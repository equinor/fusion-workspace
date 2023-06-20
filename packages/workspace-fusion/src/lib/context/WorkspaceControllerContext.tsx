import { createContext, useState, useCallback, type ReactNode } from 'react';
import { type Selection } from '../types/selection';
import type { GetIdentifier } from '../types';

export const WorkspaceContext = createContext<WorkspaceContextType<unknown> | null>(null);

type WorkspaceContextProviderProps<TData> = {
  getIdentifier: GetIdentifier<TData>;
  children: ReactNode;
};

export function WorkspaceContextProvider<T>(props: WorkspaceContextProviderProps<T>) {
  const { clearSelection, selectById, selectItem, selection } = useSelection(props.getIdentifier);
  return (
    <WorkspaceContext.Provider
      value={{
        clearSelection,
        selectById,
        selectItem: selectItem as (item: unknown) => void,
        selection,
      }}
    >
      {props.children}
    </WorkspaceContext.Provider>
  );
}

function useSelection<T>(getIdentifier: GetIdentifier<T>) {
  const [selection, set] = useState<Selection<T> | null>(getItemIdFromUrl());
  /** curry setter to avoid useEffect */
  const setSelection = useCallback(
    (ev: Selection<T> | null) => {
      set(ev);
      onSelectedChange(ev);
    },
    [set]
  );
  const clearSelection = useCallback(() => setSelection(null), [setSelection]);
  const selectById = useCallback((id: string) => setSelection({ id: id, item: null }), [setSelection]);
  const selectItem = useCallback((item: T) => setSelection({ id: getIdentifier(item), item: item }), [setSelection]);

  return {
    selection,
    clearSelection,
    selectById,
    selectItem,
  };
}

function getItemIdFromUrl<T>(): Selection<T> | null {
  const url = new URL(window.location.toString());
  const itemId = url.searchParams.get('item');
  if (!itemId) return null;
  return { id: itemId, item: null };
}

type WorkspaceContextType<T> = {
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
