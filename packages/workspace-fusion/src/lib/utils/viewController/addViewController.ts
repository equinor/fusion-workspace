import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames, FusionMediator } from '../../types';
import { FusionBookmark, ViewBookmark } from '../../types/fusionBookmark';

/** Configure a view controller with the mediator */
export function addViewController<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	/** Sync loading state */
	mediator.onIsLoadingChange(viewController.viewState.setIsLoading);

	/** Bookmarks */
	mediator.bookmarkService.onApply((state) => state.view && applyViewStateBookmark(state.view, viewController));
	mediator.bookmarkService.registerCapture(() => captureBookmark(viewController));
}

/** Applies a fusion bookmark to the view controller */
function applyViewStateBookmark<TError>(
	viewBookmark: ViewBookmark,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	viewController.tabs.setActiveTab(viewBookmark.activeTab as WorkspaceTabNames);
}

/** Captures the view state of the view controller */
function captureBookmark<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
): Pick<FusionBookmark<TData>, 'view'> {
	return {
		view: {
			activeTab: viewController.tabs.activeTab,
		},
	};
}
