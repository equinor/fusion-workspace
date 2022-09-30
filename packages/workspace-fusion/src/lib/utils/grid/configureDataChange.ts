import { ProxyGrid } from '@workspace/grid';
import { FusionMediator } from '../../types';

/**Update data on gridController whenever filtered data on mediator changes */
export function configureDataChange<TData>(gridController: ProxyGrid<TData>, mediator: FusionMediator<TData>) {
	mediator.dataService.onFilterDataChange((data) => {
		// eslint-disable-next-line no-param-reassign
		gridController.rowData = data;
	});
}
