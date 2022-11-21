import { WorkspaceViewController } from '@equinor/workspace-react';
import { SidesheetConfig } from '../../integrations/sidesheet';
import { SidesheetWrapper } from '../../components';
import { FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../types';

export function addSidesheet<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>(
	config: SidesheetConfig<TData> | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext>,
	getIdentifier: GetIdentifier<TData>
) {
	if (!config) return;
	viewController.addSidesheetComponent(() => (
		<SidesheetWrapper getIdentifier={getIdentifier} Component={config.Sidesheet} mediator={mediator} />
	));
}
