import { GardenController } from '../classes';
import { ReactiveValue } from '../classes/reactiveValue';
import { GardenProp } from '../types/gardenProp';
import { useState, useEffect } from 'react';

export const createGardenProp = <
	TData extends Record<PropertyKey, unknown>,
	ExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>(
	controller: GardenController<TData, ExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
): GardenProp<TData, ExtendedFields, TCustomGroupByKeys, TCustomState, TContext> => ({
	onClickItem: (item) => controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item, controller),
	getDisplayName: controller.getDisplayName,
	getIdentifier: controller.getIdentifier,
	useContext: () => controller.context,
	useCurrentGroupingKeys: () => ItemToState(controller.grouping),
	useCustomGroupByKeys: () => (controller.customGroupByKeys ? ItemToState(controller.customGroupByKeys) : undefined),
	useData: () => ItemToState(controller.data),
	useGroups: () => ItemToState(controller.groups),
	useSelectedNodes: () => [ItemToState(controller.selectedNodes), controller.selectedNodes.setValue],
});

const ItemToState = <T>({ onChange, value }: ReactiveValue<T>) => {
	const [val, setVal] = useState(value);

	useEffect(() => {
		const unsub = onChange(setVal);
		return () => unsub();
	}, []);

	return val;
};
