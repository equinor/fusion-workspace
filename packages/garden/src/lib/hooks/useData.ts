import { useEffect, useState } from 'react';
import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { useReactiveValue } from './useReactiveValue';

export function useData<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>(controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>) {
	const [data, setData] = useState(controller.getData());

	useEffect(() => {
		const sub = controller.data$.subscribe(setData);
		return () => sub.unsubscribe();
	}, []);

	return data;
}
