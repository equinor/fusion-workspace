import { useObservable } from '@equinor/workspace-observable-proxy';
import { GridController } from '../types';

export const useRowData = <TData extends Record<PropertyKey, unknown>>(controller: GridController<TData>) =>
	useObservable(controller.rowData$, controller.rowData);
