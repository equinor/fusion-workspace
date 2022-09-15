import { WorkspaceViewController } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../components';
import { CustomTab, FusionMediator, WorkspaceTabNames } from '../types';

export function addCustomTab<TData, TError>(
	{ Component, TabIcon, name, CustomHeader }: CustomTab,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	viewController.tabs.addTab({
		Component: () => <CustomTabWrapper Component={Component} mediator={mediator} />,
		TabIcon,
		CustomHeader,
		name: name as WorkspaceTabNames,
	});
}
