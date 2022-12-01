import { createContext, useContext, useEffect, useState } from 'react';
import { ReactFilterController } from '../classes/reactFilterController';

export const FilterContext = createContext(new ReactFilterController());

export const useFilterContext = <TData>(): ReactFilterController<TData> => {
	const controller = useContext(FilterContext) as ReactFilterController<TData>;
	const [filterState, setFilterState] = useState(controller.filterStateController.filterState);
	const [filteredData, setFilteredData] = useState(controller.getFilteredData());
	const [groups, setFilterGroups] = useState(controller.getFilterValues());

	useEffect(() => {
		const subFilterValues = controller.filterValues$.subscribe(setFilterGroups);
		const subFilteredData = controller.filteredData$.subscribe(setFilteredData);
		const subFilterState = controller.filterStateController.onFilterStateChange(setFilterState);
		return () => {
			subFilteredData.unsubscribe();
			subFilterState();
			subFilterValues.unsubscribe();
		};
	}, []);

	return controller;
};
