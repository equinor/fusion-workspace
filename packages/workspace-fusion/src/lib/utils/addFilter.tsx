import { FilterController, FilterOptions } from '@equinor/filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceTabNames } from '../types';

export function addFilter<TData, TError>(
	config: FilterOptions<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	const filterController = new FilterController<TData>();
	filterController.addValueFormatters(config);
	filterController.onFilterDataChange(mediator.setFilteredData);
	viewController.filter.FilterComponent = () => <div></div>;
	mediator.data && filterController.setData(mediator.data);
	filterController.init();
	mediator.onDataChange((data) => {
		filterController.setData(data);
		filterController.init();
	});
}
