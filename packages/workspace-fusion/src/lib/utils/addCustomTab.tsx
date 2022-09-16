import { WorkspaceViewController } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../components';
import { CustomTab, FusionMediator, WorkspaceTabNames } from '../types';

export function addCustomTab<TData, TError>(
	{ Component, HeaderComponent, name }: CustomTab,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	viewController.tabs.addTab({
		Component: () => <CustomTabWrapper Component={Component} mediator={mediator} />,
		HeaderComponent,
		name: name as WorkspaceTabNames,
	});
}
