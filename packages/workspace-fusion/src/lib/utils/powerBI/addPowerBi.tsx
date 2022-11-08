import { PowerBI, PowerBiController, IReportEmbedConfiguration } from '@equinor/workspace-powerbi';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { PowerBiHeader } from '../../components/Header/PowerBiHeader';
import { PowerBiIcon } from '../../icons/PowerBiIcon';
import { WorkspaceTabNames, FusionMediator, PowerBiConfig } from '../../types';

export function addPowerBi<TData, TError>(
	powerBiConfig: PowerBiConfig,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	const controller = new PowerBiController(powerBiConfig.reportUri, async () => embedInfo(powerBiConfig));

	//TODO:  Bookmark service config
	viewController.tabController.addTab({
		Component: () => <PowerBI controller={controller} />,
		CustomHeader: () => <PowerBiHeader controller={controller} />,
		name: 'powerbi',
		TabIcon: () => <PowerBiIcon />,
		ignoreLoading: true,
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
