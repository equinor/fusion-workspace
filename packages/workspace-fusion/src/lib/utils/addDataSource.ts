import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionWorkspaceController } from '../types';

export function addDataSource<TData, TError, TContext>(
	dataFetch: DataFetchAsync<TData>,
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	controller.addController({
		controller: new DataSourceController(dataFetch),
		name: 'dataSource',
		config: (dataSourceController, WorkspaceController) => {
			dataSourceController.onDataChanged((data) => {
				WorkspaceController.setFilteredData(data);
			});
		},
	});
}
