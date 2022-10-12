import { FetchController } from '@workspace/data-source';
import { DataSourceOptions, FusionMediator } from '../../types';
import { createFetchFunction } from './createFetchFunction';

export function addDataSource<TData>(dataFetch: DataSourceOptions<TData>, mediator: FusionMediator<TData>) {
	const { mount$, unMount$, dataService, setIsLoading } = mediator;
	const fetchFunction = createFetchFunction(dataFetch, mediator);

	const dataSourceController = new FetchController<TData>(fetchFunction);
	dataSourceController.onDataChanged((newData) => {
		dataService.data = newData;
	});
	dataSourceController.onIsLoadingChanged(setIsLoading);
	mount$.subscribe(dataSourceController.getDataAsync);
	unMount$.subscribe(dataSourceController.abort);
	unMount$.subscribe(dataSourceController.destroy);
}
