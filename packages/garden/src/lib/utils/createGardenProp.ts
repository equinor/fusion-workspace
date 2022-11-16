import { GardenController } from '../classes';
import { GardenProp } from '../types/gardenProp';
import { valueToState } from './valueToState';

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
	getDisplayName: (item: TData) =>
		controller.getDisplayName(
			item,
			//TODO: Investigate why default value never breaks type inferring
			controller as GardenController<
				TData,
				never,
				never,
				Record<PropertyKey, unknown>,
				Record<PropertyKey, unknown>
			>
		),
	getIdentifier: controller.getIdentifier,
	useContext: () => controller.customState,
	useCurrentGroupingKeys: () => valueToState(controller.grouping),
	useCustomGroupByKeys: () => (controller.customGroupByKeys ? valueToState(controller.customGroupByKeys) : undefined),
	useData: () => valueToState(controller.data),
	useGroups: () => valueToState(controller.groups),
	useSelectedNodes: () => [valueToState(controller.selectedNodes), controller.selectedNodes.setValue],
});
