import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react';
import { GardenMeta, GetIdentifier } from '../types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GardenDataSource } from '../components';

type GardenState = {
  selectionService: SelectionService;
  groupingService: GroupingService;
  gardenMetaQuery: UseQueryResult<GardenMeta, unknown>;
};

type GroupingService = {
  groupingKeys: string[];
  timeInterval: string | null;
  dateVariant: string | null;
};

type SelectionService = {
  selection: string | null;
  selectNode: (item: Record<PropertyKey, unknown>) => void;
  clearSelection: VoidFunction;
};

export const GardenContext = createContext<GardenState | null>(null);

export const GardenContextProvider = <T, TContext = undefined>(
  props: PropsWithChildren<{
    getIdentifier: GetIdentifier<T>;
    selected: string | null;
    initialGrouping: string[];
    timeInterval: string | null;
    dateVariant: string | null;
    dataSource: GardenDataSource<TContext>;
    context: TContext | undefined;
  }>
) => {
  const gardenMetaQuery = useQuery(
    ['garden', ...props.initialGrouping, props.timeInterval, props.dateVariant, props.context],
    {
      refetchOnWindowFocus: false,
      suspense: true,
      useErrorBoundary: true,
      keepPreviousData: false,
      cacheTime: Infinity,
      staleTime: Infinity,
      queryFn: ({ signal }) =>
        props.dataSource.getGardenMeta(
          { groupingKeys: props.initialGrouping, timeInterval: props.timeInterval, dateVariant: props.dateVariant },
          props.context,
          signal ?? new AbortSignal()
        ),
    }
  );

  const selectionService = useSelectionService(props.getIdentifier, props.selected);
  const groupingService = useGroupingService(props.initialGrouping, props.timeInterval, props.dateVariant);

  return (
    <GardenContext.Provider value={{ groupingService, selectionService, gardenMetaQuery }}>
      {props.children}
    </GardenContext.Provider>
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

const useGroupingService = (
  initialGrouping: string[],
  timeInterval: string | null,
  dateVariant: string | null
): GroupingService => {
  return {
    groupingKeys: initialGrouping,
    timeInterval: timeInterval,
    dateVariant: dateVariant,
  };
};
