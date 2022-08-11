import { WorkspaceController } from '@workspace/workspace-core';
import { StatusBarWrapper } from '../components';
import { StatusBarConfig, WorkspaceControllers, WorkspaceOnClick } from '../types';

export function addStatusBar<TData, TError, TContext>(
	config: StatusBarConfig<TData>,
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
) {
	controller.controllers.view.StatusBarComponent = () => <StatusBarWrapper config={config} controller={controller} />;
}
