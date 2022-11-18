import { WorkspaceViewController } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../components';
import { CustomTab, FusionMediator, WorkspaceTabNames } from '../types';

export async function addCustomTab<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>(
	tab: CustomTab,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext>
) {
	if (tab.predicate && !(await tab.predicate())) return;
	viewController.tabController.tabs.push({
		Component: () => <CustomTabWrapper Component={tab.Component} mediator={mediator} />,
		TabIcon: tab.TabIcon,
		CustomHeader: tab.CustomHeader,
		name: tab.name as WorkspaceTabNames,
	});
}
