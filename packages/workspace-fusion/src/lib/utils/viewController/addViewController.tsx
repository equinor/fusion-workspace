import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { DumpsterFireDialog } from '../../components/ErrorComponent';
import { updateQueryParams } from '../../classes/fusionUrlHandler';
import { WorkspaceTabNames, FusionMediator, ViewBookmark, FusionBookmark, FusionWorkspaceError } from '../../types';
import { BaseEvent } from '@equinor/workspace-core';
import { useTabNavigation } from './hooks/useTabNavigation';

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
		updateQueryParams([['tab', tab.toLowerCase()]], mediator, history);
	});

	/** Switch tab if somebody presses the navigation buttons in browser */
	viewController.addProvider({
		name: 'History pop',
		Component: ({ children }) => {
			useTabNavigation({ history, mediator: mediator, viewController });
			return <>{children}</>;
		},
	});

	mediator.onUnMount(() => {
		viewController.destroy();
	});
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
