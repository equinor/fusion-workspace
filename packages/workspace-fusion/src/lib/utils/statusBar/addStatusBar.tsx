import { WorkspaceViewController } from '@equinor/workspace-react';
import { StatusBarWrapper } from '../../components';
import { FusionMediator, StatusBarConfig, WorkspaceTabNames } from '../../types';

export function addStatusBar<TData, TError>(
	config: StatusBarConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	viewController.addStatusBarComponent(() => <StatusBarWrapper config={config} mediator={mediator} />);
}
