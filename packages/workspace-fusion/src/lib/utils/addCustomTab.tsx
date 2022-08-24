import { WorkspaceReactBuilder } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../components';
import { CustomTab, FusionMediator, WorkspaceTabNames } from '../types';

export function addCustomTab<TData, TError>(
	{ Component, HeaderComponent, name }: CustomTab<TData>,
	viewController: WorkspaceReactBuilder<string>,
	mediator: FusionMediator<TData, TError>
) {
	viewController.controller.tabs.addTab({
		Component: () => <CustomTabWrapper Component={Component} mediator={mediator} />,
		HeaderComponent,
		name: name as WorkspaceTabNames,
	});
}
