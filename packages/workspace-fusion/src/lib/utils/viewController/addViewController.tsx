import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { DumpsterFireDialog } from '../../components/ErrorComponent';
import { updateQueryParams } from '../../classes/fusionUrlHandler';
import { WorkspaceTabNames, FusionMediator, ViewBookmark, FusionBookmark, FusionWorkspaceError } from '../../types';
import { BaseEvent } from '@equinor/workspace-core';
import { RootHeaderContext } from '../../context';

/** Configure a view controller with the mediator */
export function addViewController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>,
	history: BrowserHistory
) {
	viewController.ErrorComponent = ({ error }) => <DumpsterFireDialog text={error.detail} buttons={[]} />;

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
		updateQueryParams([['tab', tab.toLowerCase()]], mediator, history);
	});

	initTabOnLoad(mediator, viewController);

	viewController.addProvider({ name: 'Header context root', Component: RootHeaderContext });
}

export function initTabOnLoad<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	const abortController = new AbortController();

	/**
	 * Switch tab when document is ready
	 * Ev listener is removed when signal is aborted
	 */
	window.addEventListener(
		'load',
		() => {
			switchTabOnNavigation(mediator, viewController);
			abortController.abort();
		},
		{ signal: abortController.signal }
	);
}

/** Switches tab when url changes due to navigation event */
export function switchTabOnNavigation<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>,
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
