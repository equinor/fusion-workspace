import { createContext, type PropsWithChildren, useState, useEffect, useContext } from 'react';

const WorkspaceControllerContext = createContext<WorkspaceControllerContextType<unknown> | null>(null);

export const useWorkspaceController = () => {
  const context = useContext(WorkspaceControllerContext);
  if (!context) {
    throw new Error('Context invoked out of bounds');
  }
  return context;
};

export function WorkspaceControllerContextProvider<T>(props: PropsWithChildren) {
  const [selected, setSelected] = useState<Selection<T> | null>(null);

  useEffect(() => {
    const url = new URL(window.location.toString());
    const item = url.searchParams.get('item');
    if (item) {
      setSelected({ id: item, item: null });
    }
  }, []);

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
  window.location.replace(url);
};

type WorkspaceControllerContextType<T> = {
  setSelected: (node: Selection<T> | null) => void;
  selected: Selection<T> | null;
};

export type Selection<T> = {
  id: string;
  item: T | null;
};
