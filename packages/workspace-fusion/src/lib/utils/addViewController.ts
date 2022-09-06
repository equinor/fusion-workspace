import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { updateQueryParams } from '../classes/fusionUrlHandler';
import { WorkspaceTabNames, FusionMediator } from '../types';

export function addViewController<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>,
	history: BrowserHistory
) {
	viewController.isMounted.onchange((val) => (val ? mediator.setMount() : mediator.setUnmount()));
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
	const newTab = tab.split('tab=')[1];
	if (newTab === viewController.tabs.activeTab) return;
	viewController.tabs.setActiveTab(tab.split('tab=')[1] as WorkspaceTabNames);
}
