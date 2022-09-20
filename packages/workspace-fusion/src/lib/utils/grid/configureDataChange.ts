import { GridController } from '@workspace/grid';
import { FusionMediator } from '../../types';

/**Update data on gridController whenever filtered data on mediator changes */
export function configureDataChange<TData>(gridController: GridController<TData>, mediator: FusionMediator<TData>) {
	mediator.dataService.onFilterDataChange(gridController.setRowData);
}
