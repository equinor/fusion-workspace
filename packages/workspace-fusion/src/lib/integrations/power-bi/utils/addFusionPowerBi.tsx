import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionPowerBiConfigurator } from '../../../classes';
import { FusionMediator, FusionWorkspaceError, WorkspaceTabNames } from '../../../types';
import { FusionPowerBiConfig } from '../';
import { addPowerBi } from './addPowerBi';
import { BaseEvent } from '@equinor/workspace-core';

export function addFusionPowerBi<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	fusionPowerBiOptions: FusionPowerBiConfig | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	if (!fusionPowerBiOptions) return;
	const reportUri = fusionPowerBiOptions.reportUri;
	const getConfig = () => FusionPowerBiConfigurator.getEmbedInfo(reportUri);
	const getToken = () => FusionPowerBiConfigurator.getToken(reportUri);
	addPowerBi({ getConfig, getToken, reportUri }, viewController, mediator);
}
