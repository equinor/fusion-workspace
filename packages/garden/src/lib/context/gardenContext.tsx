import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react';
import { GetIdentifier } from '../types';

type GardenState = {
  selectionService: SelectionService;
  groupingService: GroupingService;
};

type GroupingService = {
  groupingKeys: string[];
};

type SelectionService = {
  selection: string | null;
  selectNode: (item: Record<PropertyKey, unknown>) => void;
  clearSelection: VoidFunction;
};

export const GardenContext = createContext<GardenState | null>(null);

export const GardenContextProvider = <T,>(
  props: PropsWithChildren<{ getIdentifier: GetIdentifier<T>; selected: string | null; initialGrouping: string[] }>
) => {
  const selectionService = useSelectionService(props.getIdentifier, props.selected);
  const groupingService = useGroupingService(props.initialGrouping);

  return (
    <GardenContext.Provider value={{ groupingService, selectionService }}>{props.children}</GardenContext.Provider>
  );
};

const useSelectionService = <T,>(getIdentifier: GetIdentifier<T>, initialSelected: string | null): SelectionService => {
  const [selection, set] = useState<string | null>(initialSelected);

  useEffect(() => {
    set(initialSelected);
  }, [initialSelected]);

  const clearSelection = useCallback(() => set(null), [set]);
  const selectNode = useCallback(
    (item: T) => {
      set(getIdentifier(item));
    },
    [set, getIdentifier]
  );
  return {
    clearSelection,
    selection,
    selectNode: selectNode as (item: Record<PropertyKey, unknown>) => void,
  };
};

const useGroupingService = (initialGrouping: string[]): GroupingService => {
  return {
    groupingKeys: initialGrouping,
  };
};
