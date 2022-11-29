import { ReactFilterController, FilterContextProvider } from '@equinor/workspace-filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../../types';

export const FUSION_FILTER_PROVIDER_NAME = 'filter';

/**
 * Wraps workspace in filter context
 */
export function addFilterContext<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	filterController: ReactFilterController<TData>
) {
	const FilterProvider = ({ children }) => (
		<FilterContextProvider controller={filterController}>{children}</FilterContextProvider>
	);
	viewController.addProvider({
		Component: FilterProvider,
		name: FUSION_FILTER_PROVIDER_NAME,
	});
}
