import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { useReactiveValue } from './useReactiveValue';

export function useData<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys>,
	TCustomState extends BaseRecordObject<TCustomState>,
	TContext
>(controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) {
	return useReactiveValue(controller.data);
}
