import { DataSourceController } from '@workspace/data-source';
import { WorkspaceController } from '@workspace/workspace-core';
import { DataFetchAsync, WorkspaceControllers, WorkspaceOnClick } from '../types';

export function addDataSource<TData, TError, TContext>(
	dataFetch: DataFetchAsync<TData>,
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
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
