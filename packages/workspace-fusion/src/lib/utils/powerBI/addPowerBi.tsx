import { Tabs } from '@equinor/eds-core-react';
import { PowerBI, PowerBiController, PowerBIFilter } from '@equinor/powerbi';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { IReportEmbedConfiguration, Page, Report } from 'powerbi-client';
import { useEffect, useState } from 'react';
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

	controller.onActivePageChanged((page) => {
		console.log(`new page`, page);
	});

	viewController.filter.FilterComponent = () => <FusionPowerBiFilter controller={controller} />;
	viewController.StatusBarComponent = () => <PageNavigation controller={controller} />;

	mediator.onMount(() => {
		controller.getConfig && controller.getConfig(controller.reportUri);
	});
}

interface FusionPowerBiFilterProps {
	controller: PowerBiController;
}
function FusionPowerBiFilter({ controller }: FusionPowerBiFilterProps) {
	const [report, setReport] = useState<Report | null>(null);

	useEffect(() => {
		controller.onReportReady(setReport);
	}, []);

	if (!report) {
		return <div>Loading.....</div>;
	}

	return <PowerBIFilter isLoaded={true} report={report} />;
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

interface PageNavigationProps {
	controller: PowerBiController;
}
export function PageNavigation({ controller }: PageNavigationProps) {
	const [pages, setPages] = useState<Page[]>([]);
	const [report, setReport] = useState<Report | null>(null);

	useEffect(() => {
		controller.onReportReady((report) => {
			setReport(report);
			if (pages) {
				report.getPages().then((pages) => setPages(pages.filter((s) => s.visibility !== 1)));
			}
		});
	}, []);

	return (
		<Tabs>
			{pages.map(({ name, displayName, setActive }) => (
				<Tabs.Tab
					key={name}
					onClick={() => {
						try {
							report?.setPage(name);
						} catch (e) {
							console.log(e);
						}
					}}
				>
					{displayName}
				</Tabs.Tab>
			))}
		</Tabs>
	);
}
