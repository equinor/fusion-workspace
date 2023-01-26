import { ReactFilterController, FilterContextProvider } from '@equinor/workspace-filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { useQueryContext } from '../../../integrations/data-source';
import { useQuery } from '@tanstack/react-query';
import { WorkspaceTabNames } from '../../../types';

export const FUSION_FILTER_PROVIDER_NAME = 'filter';

/**
 * Wraps workspace in filter context
 */
export function addFilterContext<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	filterController: ReactFilterController<TData>
) {
	const FilterProvider = ({ children }) => {
		useSyncFilterProvider(filterController as any);
		return <FilterContextProvider controller={filterController}>{children}</FilterContextProvider>;
	};
	viewController.addProvider({
		Component: FilterProvider,
		name: FUSION_FILTER_PROVIDER_NAME,
	});
}

function useSyncFilterProvider(filterControlLer: ReactFilterController<unknown>) {
	const ctx = useQueryContext();

	useQuery({
		...ctx,
		onSuccess(data) {
			filterControlLer.setData(data as unknown[]);
			filterControlLer.init();
		},
	});
}
