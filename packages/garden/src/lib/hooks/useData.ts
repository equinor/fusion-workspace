import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { useReactiveValue } from './useReactiveValue';

export function useData<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys>,
	TCustomState extends BaseRecordObject<TCustomState>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>(controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) {
	return useReactiveValue(controller.data);
}
