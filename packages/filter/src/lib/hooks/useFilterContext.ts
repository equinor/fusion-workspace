import { createContext, useContext } from 'react';
import { ReactFilterController } from '../classes/reactFilterController';

export const FilterContext = createContext(new ReactFilterController());

export const useFilterContext = <TData>(): ReactFilterController<TData> =>
	useContext(FilterContext) as ReactFilterController<TData>;
