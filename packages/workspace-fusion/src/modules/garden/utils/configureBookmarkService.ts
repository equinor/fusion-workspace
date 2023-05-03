import { BaseEvent } from '@equinor/workspace-core';
import { GardenController } from '@equinor/workspace-garden';
import { FusionMediator, GardenBookmark } from '../../../lib';

/** Configures the mediators bookmarkservice to work with the garden controller */
export function bookmarkEffect<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>,
  TCustomSidesheetEvents extends BaseEvent = never
>(
  gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>,
  mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
  return () => {
    mediator.bookmarkService.registerCapture(() => ({ garden: captureGardenBookmark(gardenController) }));

    gardenController.grouping.onChange(mediator.bookmarkService.capture);
    const sub = mediator.bookmarkService.apply$.subscribe(
      (state) => state?.garden && applyFusionBookmark(state.garden, gardenController)
    );
    return () => {
      sub.unsubscribe();
    };
  };
}

/**Applies a fusion bookmark to garden */
function applyFusionBookmark<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>(
  bookmark: GardenBookmark<TData>,
  gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>
) {
  gardenController.grouping.setValue(bookmark.groupingKeys);
  gardenController.selectedNodes.setValue(bookmark.selectedNodes ?? []);
}

/** Captures a garden bookmark */
function captureGardenBookmark<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>(gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>): GardenBookmark<TData> {
  return {
    groupingKeys: gardenController.grouping.value,
    selectedNodes: gardenController.selectedNodes.value,
  };
}