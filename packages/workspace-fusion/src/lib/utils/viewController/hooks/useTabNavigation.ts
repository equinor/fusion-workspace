import { BaseEvent } from '@equinor/workspace-core';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { Action, BrowserHistory } from 'history';
import { FusionMediator, WorkspaceTabNames } from '../../../types';
import { useEffect } from 'react';

type Config = {
	history: BrowserHistory;
	mediator: FusionMediator<any, any, any>;
	viewController: WorkspaceViewController<any, any>;
};

export const useTabNavigation = ({ history, mediator, viewController }: Config) => {
	useEffect(() => {
		switchTabOnNavigation(mediator, viewController);
		const unsub = history.listen(({ action }) => {
			if (action === Action.Pop) {
				//Navigation back or forward;
				switchTabOnNavigation(mediator, viewController);
			}
		});
		return () => unsub();
	}, []);
};

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
