import { BaseEvent } from '@equinor/workspace-core';
import { Tab } from '@equinor/workspace-react';
import { CustomTabWrapper } from '../../components';
import { CustomTab, FusionMediator, WorkspaceTabNames } from '../../types';

export function addCustomTab<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(tab: CustomTab, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>): Tab {
	return {
		Component: () => <CustomTabWrapper Component={tab.Component} mediator={mediator} />,
		TabIcon: tab.TabIcon,
		CustomHeader: tab.CustomHeader,
		name: tab.name as WorkspaceTabNames,
	};
}
