import { createContext, useContext } from 'react';
import { ReactFilterController } from '../classes/reactFilterController';

export const FilterContext = createContext<ReactFilterController<unknown> | null>(null);

export const useFilterContext = <TData>(): ReactFilterController<TData> => {
	const controller = useContext(FilterContext) as ReactFilterController<TData>;
	if (!controller) {
		throw new Error('Filter context required');
	}
	return controller;
};
