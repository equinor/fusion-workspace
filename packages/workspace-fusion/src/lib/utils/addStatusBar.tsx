import { WorkspaceViewController } from '@equinor/workspace-react';
import { StatusBarWrapper } from '../components';
import { FusionWorkspaceController, StatusBarConfig, WorkspaceTabNames } from '../types';

export function addStatusBar<TData, TError>(
	config: StatusBarConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	viewController.StatusBarComponent = () => <StatusBarWrapper config={config} mediator={mediator} />;
}
