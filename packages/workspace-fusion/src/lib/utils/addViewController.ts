import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames, FusionMediator } from '../types';

export function addViewController<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	viewController.tabs.onActiveTabChanged(mediator.setActiveTab);
	mediator.onTabChange(viewController.tabs.setActiveTab);
	viewController.isMounted.onchange((val) => (val ? mediator.setMount() : mediator.setUnmount()));
}
