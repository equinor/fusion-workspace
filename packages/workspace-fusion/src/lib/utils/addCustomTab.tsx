import { WorkspaceViewController } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../components';
import { CustomTab, FusionMediator, WorkspaceTabNames } from '../types';

export function addCustomTab<TData, TError>(
	{ Component, TabIcon, name, CustomHeader, ignoreLoading }: CustomTab,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	viewController.tabController.addTab({
		Component: () => <CustomTabWrapper Component={Component} mediator={mediator} />,
		TabIcon,
		CustomHeader,
		name: name as WorkspaceTabNames,
		ignoreLoading: ignoreLoading,
	});
}
