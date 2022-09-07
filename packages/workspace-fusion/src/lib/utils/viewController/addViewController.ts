import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { updateQueryParams } from '../../classes/fusionUrlHandler';
import { WorkspaceTabNames, FusionMediator, ViewBookmark, FusionBookmark } from '../../types';

/** Configure a view controller with the mediator */
export function addViewController<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>,
	history: BrowserHistory
) {
	/** Sync loading state */
	mediator.onIsLoadingChange(viewController.viewState.setIsLoading);

	/** Bookmarks */
	mediator.bookmarkService.onApply((state) => state?.view && applyViewStateBookmark(state.view, viewController));
	mediator.bookmarkService.registerCapture(() => captureBookmark(viewController));
	/** Sync user settings when active tab changes */
	viewController.tabs.onActiveTabChanged(mediator.bookmarkService.capture);
	viewController.tabs.onActiveTabChanged((tab) => {
		updateQueryParams([`tab=${tab.toLowerCase()}`], mediator, history);
	});
}

/** Switches tab when url changes due to navigation event */
export function switchTabOnNavigation<TData, TError>(
	mediator: FusionMediator<TData, TError>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	const tab = mediator.urlService.url.queryParams.find((params) => params.includes('tab='));
	if (!tab) return;
	const [, newTab] = tab.split('tab=');
	if (newTab === viewController.tabs.activeTab) return;
	viewController.tabs.setActiveTab(tab.split('tab=')[1] as WorkspaceTabNames);
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
