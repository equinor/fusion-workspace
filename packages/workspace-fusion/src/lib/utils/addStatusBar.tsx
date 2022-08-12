import { StatusBarWrapper } from '../components';
import { FusionWorkspaceController, StatusBarConfig } from '../types';

export function addStatusBar<TData, TError>(
	config: StatusBarConfig<TData>,
	controller: FusionWorkspaceController<TData, TError>
) {
	controller.controllers.view.StatusBarComponent = () => <StatusBarWrapper config={config} controller={controller} />;
}
