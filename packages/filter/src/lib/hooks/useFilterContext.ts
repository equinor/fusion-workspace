import { createContext, useContext, useEffect, useState } from 'react';
import { ReactFilterController } from '../classes/reactFilterController';

export const FilterContext = createContext<null | ReactFilterController<any>>(null);

export const useFilterContext = <TData>(): ReactFilterController<TData> => {
  const controller = useContext(FilterContext) as ReactFilterController<TData>;
  const [filterState, setFilterState] = useState(controller.filterStateController.filterState);
  const [filteredData, setFilteredData] = useState(controller.filteredData);
  const [groups, setFilterGroups] = useState(controller.filterGroups);

  useEffect(() => {
    const unsubscribeFilterValues = controller.onFilterValuesGenerated(setFilterGroups);
    const unsubscribeFdata = controller.onFilteredDataChanged(setFilteredData);
    const unsubscribeFilterState = controller.filterStateController.onFilterStateChange(setFilterState);
    return () => {
      unsubscribeFdata();
      unsubscribeFilterState();
      unsubscribeFilterValues();
    };
  }, []);

  return controller;
};
