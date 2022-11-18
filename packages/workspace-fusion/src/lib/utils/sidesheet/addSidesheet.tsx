import { WorkspaceViewController } from '@equinor/workspace-react';
import { SidesheetConfig } from '../../integrations/sidesheet';
import { SidesheetWrapper } from '../../components';
import { FusionMediator, WorkspaceTabNames } from '../../types';

export function addSidesheet<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>(
	config: SidesheetConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext>
) {
	viewController.addSidesheetComponent(() => <SidesheetWrapper Component={config.Component} mediator={mediator} />);
}
