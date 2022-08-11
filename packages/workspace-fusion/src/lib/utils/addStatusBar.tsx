import { StatusBarWrapper } from '../components';
import { FusionWorkspaceController, StatusBarConfig } from '../types';

export function addStatusBar<TData, TError, TContext>(
	config: StatusBarConfig<TData>,
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	controller.controllers.view.StatusBarComponent = () => <StatusBarWrapper config={config} controller={controller} />;
}
