import { CustomTabWrapper } from '../components';
import { CustomTab, FusionWorkspaceController, WorkspaceTabNames } from '../types';

export function addCustomTab<TData, TError>(
	{ Component, HeaderComponent, name }: CustomTab<TData>,
	controller: FusionWorkspaceController<TData, TError>
) {
	controller.controllers.view.tabs.push({
		Component: () => <CustomTabWrapper Component={Component} controller={controller} />,
		HeaderComponent,
		name: name as WorkspaceTabNames,
	});
}
