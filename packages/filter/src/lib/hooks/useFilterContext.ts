import { createContext, useContext, useState } from 'react';
import { ReactFilterController } from '../classes/reactFilterController';
import { useObservable } from 'rxjs-hooks';

export const FilterContext = createContext(new ReactFilterController());

export const useFilterContext = <TData>(): ReactFilterController<TData> => {
	const controller = useContext(FilterContext) as ReactFilterController<TData>;
	const [filterState, setFilterState] = useState(controller.filterStateController.filterState);

	const filteredData = useObservable(() => controller.filteredData$, controller.getFilteredData());
	const groups = useObservable(() => controller.filterValues$, controller.getFilterValues());

	return controller;
};
