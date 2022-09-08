import { GridController } from '@workspace/grid';
import { FusionMediator } from '../../types';

/**Update data on gridController whenever filtered data on mediator changes */
export function configureDataChange<TData, TError>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.dataService.onFilterDataChange(gridController.setRowData);
}
