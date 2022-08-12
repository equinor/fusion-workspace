import { GardenController } from '../classes';
import { useReactiveValue } from './useReactiveValue';

export function useData<TData, TContext>(controller: GardenController<TData, TContext>) {
	return useReactiveValue(controller.data);
}
