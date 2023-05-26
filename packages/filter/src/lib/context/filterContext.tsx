import { FilterStylesContext } from '../components/Filter';
import { FilterStateGroup, FilterStyles } from '../types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type IFilterContext = {
  uncheckedValues: FilterStateGroup[];
  setUncheckedValues: (newVal: FilterStateGroup[] | ((val: FilterStateGroup[]) => FilterStateGroup[])) => void;
  filterState: FilterStateGroup[];
  setFilterState: (newVal: FilterStateGroup[] | ((val: FilterStateGroup[]) => FilterStateGroup[])) => void;
};

export const FilterContext = createContext<null | IFilterContext>(null);

type FilterContextProviderProps = {
  defaultUncheckedValues: FilterStateGroup[] | undefined;
  styles?: FilterStyles;
};

export const FilterContextProvider = ({
  children,
  defaultUncheckedValues,
  styles,
}: PropsWithChildren<FilterContextProviderProps>) => {
  const [uncheckedValues, setUncheckedValues] = useState<FilterStateGroup[]>(defaultUncheckedValues ?? []);
  const [filterState, setFilterState] = useState<FilterStateGroup[]>([]);

  return (
    <FilterContext.Provider
      value={{
        filterState,
        setFilterState,
        setUncheckedValues,
        uncheckedValues,
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
