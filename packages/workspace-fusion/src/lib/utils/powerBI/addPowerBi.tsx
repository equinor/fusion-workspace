import { PowerBI, PowerBiController } from '@equinor/powerbi';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { IReportEmbedConfiguration } from 'powerbi-client';
import { PowerBiIcon } from '../../icons/PowerBiIcon';
import { WorkspaceTabNames, FusionMediator, PowerBiConfig } from '../../types';

export function addPowerBi<TData, TError>(
	powerBiConfig: PowerBiConfig,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	const controller = new PowerBiController(powerBiConfig.reportUri, async () => embedInfo(powerBiConfig));
	//TODO:  Bookmark service config
	viewController.tabs.addTab({
		Component: () => <PowerBI controller={controller} />,
		HeaderComponent: PowerBiIcon,
		name: 'powerbi',
	});
	mediator.onMount(() => {
		controller.getConfig && controller.getConfig(controller.reportUri);
	});
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
