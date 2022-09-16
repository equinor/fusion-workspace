import { ReactFilterController, FilterContextProvider } from '@equinor/filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../../types';

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
		name: 'Filter',
	});
}
