import { BaseEvent } from '@equinor/workspace-core';
import { GardenController, GardenGroup } from '@equinor/workspace-garden';
import { FusionMediator } from '../../../lib';

/** Adds clickevents from mediator on garden controller  */
export function configureClickEvents<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>,
  TCustomSidesheetEvents extends BaseEvent = never
>(
  gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>,
  { selectionService, getIdentifier }: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
  gardenController.clickEvents.onClickItem = (item) => {
    selectionService.selectedNodes = [{ id: getIdentifier(item), item }];
  };
  //TODO: add support for multiple selections
  // gardenController.clickEvents.onClickGroup = (group) => {
  // 	const items = findItemsRecursively(group);
  // 	selectionService.selectedNodes = items.map(getIdentifier);
  // };
}

/** Finds all items in subgroups or recursively through all subgroups */
function findItemsRecursively<TData extends Record<PropertyKey, unknown>>(item: GardenGroup<TData>): TData[] {
  if (item.items.length > 0) return item.items;
  return item.subGroups.map((group) => findItemsRecursively(group)).flat();
}
