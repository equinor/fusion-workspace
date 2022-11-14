import { GardenController } from '@equinor/workspace-garden';
import { FusionMediator, GardenBookmark } from '../../types';

/** Configures the mediators bookmarkservice to work with the garden controller */
export function configureBookmarkService<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys,
	TCustomState,
	TContext
>(
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData>
) {
	mediator.bookmarkService.registerCapture(() => ({ garden: captureGardenBookmark(gardenController) }));
	mediator.bookmarkService.apply$.subscribe(
		(state) => state?.garden && applyFusionBookmark(state.garden, gardenController)
	);
	gardenController.grouping.onChange(mediator.bookmarkService.capture);
}

/**Applies a fusion bookmark to garden */
function applyFusionBookmark<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys,
	TCustomState,
	TContext
>(
	bookmark: GardenBookmark<TData>,
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
) {
	gardenController.grouping.setValue(bookmark.groupingKeys);
	gardenController.selectedNodes.setValue(bookmark.selectedNodes ?? []);
}

/** Captures a garden bookmark */
function captureGardenBookmark<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys,
	TCustomState,
	TContext
>(
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
): GardenBookmark<TData> {
	return {
		groupingKeys: gardenController.grouping.value,
		selectedNodes: gardenController.selectedNodes.value,
	};
}
