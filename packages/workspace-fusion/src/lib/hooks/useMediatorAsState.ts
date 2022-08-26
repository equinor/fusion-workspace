import { FusionWorkspaceController } from '../types';
import { useFilteredData } from './useFilteredData';

/** Hook for using the mediator with its values as reactive state */
export const useMediatorAsState = <TData, TError>(
	mediator: FusionWorkspaceController<TData, TError>
): FusionWorkspaceController<TData, TError> => {
	const filteredData = useFilteredData(mediator);

	return {
		...mediator,
		filteredData,
	};
};
