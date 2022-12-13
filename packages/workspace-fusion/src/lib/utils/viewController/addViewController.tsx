import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { DumpsterFireDialog } from '../../components/ErrorComponent';
import { WorkspaceTabNames, FusionMediator, FusionBookmark, FusionWorkspaceError } from '../../types';
import { BaseEvent } from '@equinor/workspace-core';
import { useBookmarkState, useTabNavigation, useUpdateQueryParamsOnTabChange } from './hooks';
import { injectHook } from './injectHook';

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

	mediator.bookmarkService.registerCapture(() => captureBookmark(viewController));
	/** Sync user settings when active tab changes */
	viewController.tabController.onActiveTabChanged(mediator.bookmarkService.capture);

	injectHook({
		viewController,
		effects: () => useTabNavigation({ history, mediator, viewController }),
		name: 'History pop',
	});

	injectHook({
		viewController,
		effects: () => useBookmarkState({ mediator, viewController }),
		name: 'View bookmark',
	});

	injectHook({
		viewController,
		effects: () => useUpdateQueryParamsOnTabChange({ history, mediator, viewController }),
		name: 'Query param tab change',
	});

	mediator.onUnMount(() => {
		viewController.destroy();
	});
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
