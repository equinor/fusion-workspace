import { WorkspaceReactBuilder } from '@equinor/workspace-react';
import { StatusBarWrapper } from '../components';
import { FusionWorkspaceController, StatusBarConfig, WorkspaceTabNames } from '../types';

export function addStatusBar<TData, TError>(
	config: StatusBarConfig<TData>,
	builder: WorkspaceReactBuilder<WorkspaceTabNames>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	builder.addStatusBarComponent = () => <StatusBarWrapper config={config} controller={mediator} />;
}
