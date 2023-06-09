import { FilterStylesContext } from '../components/Filter';
import { FilterStateGroup, FilterStyles } from '../types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type IFilterContext = {
  uncheckedValues: FilterStateGroup[];
  setUncheckedValues: (newVal: FilterStateGroup[] | ((val: FilterStateGroup[]) => FilterStateGroup[])) => void;
  filterState: FilterState;
  setFilterState: (newVal: FilterStateGroup[]) => void;
  setSearchText: (searchText: string) => void;
};

export const FilterContext = createContext<null | IFilterContext>(null);

type FilterContextProviderProps = {
  defaultUncheckedValues: FilterStateGroup[] | undefined;
  styles?: FilterStyles;
};

export type FilterState = {
  search: string;
  groups: FilterStateGroup[];
};

export const FilterContextProvider = ({
  children,
  defaultUncheckedValues,
  styles,
}: PropsWithChildren<FilterContextProviderProps>) => {
  const [uncheckedValues, setUncheckedValues] = useState<FilterStateGroup[]>(defaultUncheckedValues ?? []);
  const [filterState, setFilterState] = useState<FilterState>({ groups: [], search: '' });

  return (
    <FilterContext.Provider
      value={{
        filterState,
        setFilterState: (groups) => setFilterState((s) => ({ ...s, groups: groups })),
        setUncheckedValues,
        uncheckedValues,
        setSearchText: (search) => setFilterState((v) => ({ ...v, search: search })),
      }}
    >
      <FilterStylesContext.Provider value={styles}>{children}</FilterStylesContext.Provider>
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const s = useContext(FilterContext);
  if (!s) {
    throw new Error('Filter context used out of bounds');
  }
  return s;
};
