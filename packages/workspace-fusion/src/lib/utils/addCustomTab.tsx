import { WorkspaceViewController } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../components';
import { CustomTab, FusionWorkspaceController, WorkspaceTabNames } from '../types';

export function addCustomTab<TData, TError>(
	{ Component, HeaderComponent, name }: CustomTab<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	viewController.tabs.push({
		Component: () => <CustomTabWrapper Component={Component} mediator={mediator} />,
		HeaderComponent,
		name: name as WorkspaceTabNames,
	});
}
