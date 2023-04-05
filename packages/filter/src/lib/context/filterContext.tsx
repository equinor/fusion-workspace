import { FilterGroup } from '../types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type IFilterContext = {
  uncheckedValues: FilterGroup[];
  setUncheckedValues: (newVal: FilterGroup[] | ((val: FilterGroup[]) => FilterGroup[])) => void;
  filterState: FilterGroup[];
  setFilterState: (newVal: FilterGroup[] | ((val: FilterGroup[]) => FilterGroup[])) => void;
};

export const FilterContext = createContext<null | IFilterContext>(null);

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [uncheckedValues, setUncheckedValues] = useState<FilterGroup[]>([]);
  const [filterState, setFilterState] = useState<FilterGroup[]>([]);

  return (
    <FilterContext.Provider
      value={{
        filterState,
        setFilterState,
        setUncheckedValues,
        uncheckedValues,
      }}
    >
      {children}
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
