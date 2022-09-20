import { GardenController } from '@equinor/garden';
import { FusionMediator, GardenBookmark } from '../../types';

/** Configures the mediators bookmarkservice to work with the garden controller */
export function configureBookmarkService<TData, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData>
) {
	mediator.bookmarkService.registerCapture(() => ({ garden: captureGardenBookmark(gardenController) }));
	mediator.bookmarkService.onApply((state) => state?.garden && applyFusionBookmark(state.garden, gardenController));
	gardenController.grouping.onChange(mediator.bookmarkService.capture);
}

/**Applies a fusion bookmark to garden */
function applyFusionBookmark<TData, TCustomGroupByKeys, TCustomState, TContext>(
	bookmark: GardenBookmark<TData>,
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>
) {
	gardenController.grouping.setValue(bookmark.groupingKeys);
	gardenController.selectedNodes.setValue(bookmark.selectedNodes ?? []);
}

/** Captures a garden bookmark */
function captureGardenBookmark<TData, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>
): GardenBookmark<TData> {
	return {
		groupingKeys: gardenController.grouping.value,
		selectedNodes: gardenController.selectedNodes.value,
	};
}
