import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionWorkspaceController } from '../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	controller: FusionWorkspaceController<TData, TError>
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
