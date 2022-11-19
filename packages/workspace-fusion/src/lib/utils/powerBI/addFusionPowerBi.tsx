import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionPowerBiConfigurator } from '../../classes';
import { FusionMediator, FusionWorkspaceError, WorkspaceTabNames } from 'lib/types';
import { FusionPowerBiConfig } from '../../integrations/power-bi';
import { addPowerBi } from './addPowerBi';

export function addFusionPowerBi<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(
	fusionPowerBiOptions: FusionPowerBiConfig | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>,
	mediator: FusionMediator<TData, TContext>
) {
	if (!fusionPowerBiOptions) return;
	const reportUri = fusionPowerBiOptions.reportUri;
	const getConfig = () => FusionPowerBiConfigurator.getEmbedInfo(reportUri);
	const getToken = () => FusionPowerBiConfigurator.getToken(reportUri);
	addPowerBi({ getConfig, getToken, reportUri }, viewController, mediator);
}
