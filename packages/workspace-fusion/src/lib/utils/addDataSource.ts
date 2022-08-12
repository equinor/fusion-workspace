import { DataSourceController } from '@workspace/data-source';
import { DataFetchAsync, FusionWorkspaceController } from '../types';

export function addDataSource<TData, TError>(
	dataFetch: DataFetchAsync<TData>,
	controller: FusionWorkspaceController<TData, TError>
) {
	const dataSourceController = new DataSourceController(dataFetch);
	dataSourceController.onDataChanged((data) => {
		controller.data.setValue(data);
		//TEMP: Will be removed once filter is done
		controller.filteredData.setValue(data);
	});
	dataSourceController.fetch();
}
