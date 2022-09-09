import { FusionMediator } from '../types';
import { useFilteredData } from './useFilteredData';

/** Hook for using the mediator with its values as reactive state */
export const useMediatorAsState = <TData, TError>(
	mediator: FusionMediator<TData, TError>
): FusionMediator<TData, TError> => {
	const filteredData = useFilteredData(mediator);

	return {
		...mediator,
		dataService: {
			...mediator.dataService,
			filteredData,
		},
	};
};
