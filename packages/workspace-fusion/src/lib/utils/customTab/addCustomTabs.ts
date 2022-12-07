import { BaseEvent } from '@equinor/workspace-core';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { CustomTab, FusionMediator, FusionWorkspaceError, WorkspaceTabNames } from '../../types';
import { addCustomTab } from './addCustomTab';

export function addCustomTabs<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	customTabs: CustomTab[] | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	if (!customTabs) return;
	customTabs.forEach((tab) => addCustomTab(tab, viewController, mediator));
}
