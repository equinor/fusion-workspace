import { QueryClient, QueryClientProvider, UseQueryResult, useQuery, keepPreviousData } from '@tanstack/react-query';
import { FilterStylesContext } from '../components/Filter';
import { FilterDataSource, FilterGroup, FilterStateGroup, FilterStyles } from '../types';
import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useRef, useState } from 'react';

export type IFilterContext = {
  uncheckedValues: FilterStateGroup[];
  setUncheckedValues: (newVal: FilterStateGroup[] | ((val: FilterStateGroup[]) => FilterStateGroup[])) => void;
  filterState: FilterState;
  setFilterState: (newVal: FilterStateGroup[]) => void;
  setSearchText: (searchText: string) => void;
  query: UseQueryResult<FilterGroup[], unknown>;
};

export const FilterContext = createContext<null | IFilterContext>(null);

type InitialState = {
  filterState: FilterState;
  uncheckedValues: FilterStateGroup[];
};

type FilterContextProviderProps = {
  initialState?: InitialState;
  styles?: FilterStyles;
  dataSource?: FilterDataSource;
  onChange?: (state: InitialState) => void;
};

export type FilterState = {
  search: string;
  groups: FilterStateGroup[];
};

export const FilterContextProvider = ({
  children,
  styles,
  initialState,
  dataSource,
  onChange,
}: PropsWithChildren<FilterContextProviderProps>) => {
  const client = useRef(new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }));

  if (!dataSource) {
    return <>{children}</>;
  }
  return (
    <QueryClientProvider client={client.current}>
      <FilterContextWrapper dataSource={dataSource} initialState={initialState} styles={styles} onChange={onChange}>
        {children}
      </FilterContextWrapper>
    </QueryClientProvider>
  );
};

type FilterContextWrapperProps = {
  initialState?: InitialState;
  styles?: FilterStyles;
  dataSource: FilterDataSource;
  onChange?: (state: InitialState) => void;
  children: ReactNode;
};

export const FilterContextWrapper = ({
  dataSource,
  initialState,
  styles,
  children,
  onChange,
}: FilterContextWrapperProps) => {
  const [uncheckedValues, setUncheckedValues] = useState<FilterStateGroup[]>(initialState?.uncheckedValues ?? []);
  const [filterState, setFilterState] = useState<FilterState>(initialState?.filterState ?? { groups: [], search: '' });

  const query = useQuery({
    queryKey: ['filter-meta', JSON.stringify(filterState)],
    queryFn: ({ signal }): Promise<FilterGroup[]> => dataSource.getFilterMeta(filterState, signal),
    throwOnError: false,
    placeholderData: keepPreviousData,
  });

  const setFilterStateHandler = (groups: FilterStateGroup[]) =>
    setFilterState((s) => {
      const newVal = { ...s, groups: groups };
      onChange && onChange({ filterState: newVal, uncheckedValues: uncheckedValues });
      return newVal;
    });

  useEffect(() => {
    if (!query.data) return;
    if (filterState.groups.length === 0 && filterState.search.length === 0 && uncheckedValues.length === 0) return;
    setFilterStateHandler(getServerArgs(query.data, uncheckedValues));
  }, [uncheckedValues, initialState]);

  return (
    <FilterContext.Provider
      value={{
        filterState,
        setFilterState: setFilterStateHandler,
        setUncheckedValues,
        uncheckedValues,
        setSearchText: (search) => setFilterState((v) => ({ ...v, search: search })),
        query,
      }}
    >
      <FilterStylesContext.Provider value={styles}>{children}</FilterStylesContext.Provider>
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    throw new Error('Filter context used out of bounds');
  }
  return filterContext;
};

const getServerArgs = (groups: FilterGroup[], filterState: FilterStateGroup[]) =>
  groups.map(
    (group): FilterStateGroup => ({
      name: group.name,
      values: group.filterItems
        .map((s) => s.value)
        .filter((value) => !filterState.find((x) => x.name === group.name)?.values.includes(value)),
    })
  );
