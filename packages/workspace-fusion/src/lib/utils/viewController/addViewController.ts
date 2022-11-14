import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { updateQueryParams } from '../../classes/fusionUrlHandler';
import { WorkspaceTabNames, FusionMediator, ViewBookmark, FusionBookmark, FusionWorkspaceError } from '../../types';

/** Configure a view controller with the mediator */
export function addViewController<TData extends Record<PropertyKey, unknown>>(
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>,
	mediator: FusionMediator<TData>,
	history: BrowserHistory
) {
	viewController.isMounted.onchange((mounted) => (mounted ? mediator.setMount() : mediator.setUnmount()));

	mediator.errorService.error$.subscribe(viewController.setError);

	/** Sync loading state */
	mediator.onIsLoadingChange(viewController.viewState.setIsLoading);

	/** Bookmarks */
	mediator.bookmarkService.apply$.subscribe(
		(state) => state?.view && applyViewStateBookmark(state.view, viewController)
	);
	mediator.bookmarkService.registerCapture(() => captureBookmark(viewController));
	/** Sync user settings when active tab changes */
	viewController.tabController.onActiveTabChanged(mediator.bookmarkService.capture);
	viewController.tabController.onActiveTabChanged((tab) => {
		updateQueryParams([`tab=${tab.toLowerCase()}`], mediator, history);
	});

	mediator.onUnMount(viewController.destroy);
}

/** Switches tab when url changes due to navigation event */
export function switchTabOnNavigation<TData extends Record<PropertyKey, unknown>, TError>(
	mediator: FusionMediator<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	const tab = mediator.urlService.url.searchParams.get('tab');
	if (tab) {
		viewController.tabController.setActiveTab(tab as WorkspaceTabNames);
	}
}

/** Applies a fusion bookmark to the view controller */
function applyViewStateBookmark<TError>(
	viewBookmark: ViewBookmark,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	viewController.tabController.setActiveTab(viewBookmark.activeTab as WorkspaceTabNames);
}

/** Captures the view state of the view controller */
function captureBookmark<TData extends Record<PropertyKey, unknown>, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
): Pick<FusionBookmark<TData>, 'view'> {
	return {
		view: {
			activeTab: viewController.tabController.activeTab,
		},
	};
}
