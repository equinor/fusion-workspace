import { PowerBI, PowerBiController, IReportEmbedConfiguration } from '@equinor/workspace-powerbi';
import { Tab } from '@equinor/workspace-react';
import { PowerBiHeader } from '../components/workspaceHeader/PowerBiHeader';
import { PowerBiIcon } from '../icons/PowerBiIcon';
import { PowerBiConfig } from '../';
import { BaseEvent } from '@equinor/workspace-core';

export function addPowerBi<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(powerBiConfig: PowerBiConfig | undefined): undefined | Tab {
	if (!powerBiConfig) return;
	const controller = new PowerBiController(powerBiConfig.reportUri, async () => embedInfo(powerBiConfig));

	//TODO:  Bookmark service config

	controller.getConfig && controller.getConfig(controller.reportUri);
	return {
		Component: () => <PowerBI controller={controller} />,
		CustomHeader: () => <PowerBiHeader controller={controller} />,
		name: 'powerbi',
		TabIcon: () => <PowerBiIcon />,
		ignoreLoading: true,
	};
}

async function embedInfo(config: PowerBiConfig): Promise<IReportEmbedConfiguration> {
	const { embedConfig } = await config.getConfig(config.reportUri);
	const { token } = await config.getToken(config.reportUri);

	return {
		accessToken: token,
		embedUrl: embedConfig.embedUrl,
		id: embedConfig.reportId,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false,
				},
				pageNavigation: {
					visible: false,
				},
			},
		},
		type: 'report',
		tokenType: 1,
	};
}
