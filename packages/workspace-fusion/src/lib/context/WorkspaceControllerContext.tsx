import { createContext, type PropsWithChildren, useState, useEffect, useContext } from 'react';
import { type Selection } from '../types/selection';

export const WorkspaceControllerContext = createContext<WorkspaceControllerContextType<unknown> | null>(null);

export function WorkspaceControllerContextProvider<T>(props: PropsWithChildren) {
  const [selected, setSelected] = useState<Selection<T> | null>(null);

  useGetItemIdFromUrl((id) => setSelected({ id: id, item: null }));

  return (
    <WorkspaceControllerContext.Provider
      value={{
        setSelected: (selectionEvent) => {
          setSelected(selectionEvent as Selection<T> | null);
          onSelectedChange(selectionEvent);
        },
        selected: selected,
      }}
    >
      {props.children}
    </WorkspaceControllerContext.Provider>
  );
}

function useGetItemIdFromUrl(setter: (id: string) => void) {
  useEffect(() => {
    const url = new URL(window.location.toString());
    const itemId = url.searchParams.get('item');
    if (itemId) {
      setter(itemId);
    }
  }, []);
}

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

type WorkspaceControllerContextType<T> = {
  setSelected: (node: Selection<T> | null) => void;
  selected: Selection<T> | null;
};
