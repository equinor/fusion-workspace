import { FusionMediator } from '../types';
import { useFilteredData } from './useFilteredData';

/** Hook for using the mediator with its values as reactive state */
export const useMediatorAsState = <TData extends Record<PropertyKey, unknown>>(
	mediator: FusionMediator<TData>
): FusionMediator<TData> => {
	const filteredData = useFilteredData(mediator);

	return Object.assign({}, mediator, { dataService: { ...mediator.dataService, filteredData } });
};
