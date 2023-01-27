import { FusionPowerBiConfigurator } from '../../../classes';
import { FusionPowerBiConfig } from '../';
import { addPowerBi } from './addPowerBi';
import { BaseEvent } from '@equinor/workspace-core';

export function addFusionPowerBi<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(fusionPowerBiOptions: FusionPowerBiConfig | undefined) {
	if (!fusionPowerBiOptions) return;
	const reportUri = fusionPowerBiOptions.reportUri;
	const getConfig = () => FusionPowerBiConfigurator.getEmbedInfo(reportUri);
	const getToken = () => FusionPowerBiConfigurator.getToken(reportUri);
	return addPowerBi({ getConfig, getToken, reportUri });
}
