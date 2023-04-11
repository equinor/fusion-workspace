import { FilterStateGroup } from '../types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type IFilterContext = {
  uncheckedValues: FilterStateGroup[];
  setUncheckedValues: (newVal: FilterStateGroup[] | ((val: FilterStateGroup[]) => FilterStateGroup[])) => void;
  filterState: FilterStateGroup[];
  setFilterState: (newVal: FilterStateGroup[] | ((val: FilterStateGroup[]) => FilterStateGroup[])) => void;
};

export const FilterContext = createContext<null | IFilterContext>(null);

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [uncheckedValues, setUncheckedValues] = useState<FilterStateGroup[]>([]);
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
