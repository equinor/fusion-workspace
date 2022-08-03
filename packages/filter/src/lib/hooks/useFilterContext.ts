import { useContext } from 'react';
import { FilterController } from '../classes';
import { FilterContext } from '../components/quickFilter/QuickFilter';

export const useFilterController = <T>() => useContext(FilterContext) as FilterController<T>;
