import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { useReactiveValue } from './useReactiveValue';

export function useData<
	TData,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys>,
	TCustomState extends BaseRecordObject<TCustomState>,
	TContext
>(controller: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>) {
	return useReactiveValue(controller.data);
}
