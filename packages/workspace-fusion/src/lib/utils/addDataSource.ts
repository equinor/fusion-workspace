import { DataSourceController } from '@workspace/data-source';
import { WorkspaceController } from '@workspace/workspace-core';
import { DataFetchAsync, WorkspaceControllers, WorkspaceOnClick } from '../types';

export function addDataSource<TData, TError, TContext>(
	dataFetch: DataFetchAsync<TData>,
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
) {
	const dc = new DataSourceController(dataFetch);
	controller.addController({
		controller: dc,
		name: 'dataSource',
		config: (dc, wc) => {
			dc.onDataChanged((data) => {
				wc.setFilteredData(data);
			});
		},
	});
}
