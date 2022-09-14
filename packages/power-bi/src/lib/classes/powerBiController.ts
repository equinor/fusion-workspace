import { OnchangeCallback, Observable } from '@workspace/workspace-core';
import { IReportEmbedConfiguration, Page, Report } from 'powerbi-client';
import { ICustomEvent } from 'service';
import { GetPowerBiEmbedConfig } from '../types/embedConfig';
import { Filter } from '../types/filter';

export class PowerBiController {
	activePage?: Page;

	private setActivePage: (value: Page) => void;

	onActivePageChanged: (callback: OnchangeCallback<Page>) => () => void;

	reportUri: string;

	filter?: Filter[];

	config?: IReportEmbedConfiguration;

	getConfig?: GetPowerBiEmbedConfig;

	isReady = false;

	setIsReady: (value: boolean) => void;

	onIsReadyChanged: (callback: OnchangeCallback<boolean>) => () => void;

	private cb: OnReportReady[] = [];

	onReportReady = (cb: OnReportReady) => {
		this.cb.push(cb);
	};

	reportReady = (report: Report) => {
		report.on('pageChanged', (page: ICustomEvent<any>) => {
			this.setActivePage(page.detail.newPage);
		});
		this.cb.forEach((callback) => callback(report));
	};

	constructor(reportUri: string, getConfig: GetPowerBiEmbedConfig) {
		this.reportUri = reportUri;
		this.getConfig = async (uri) => {
			this.setIsReady(false);
			const config = await getConfig(uri);
			this.config = config;
			this.setIsReady(true);
			return config;
		};
		const { onchange, setValue } = new Observable(this.isReady);
		this.setIsReady = setValue;
		this.onIsReadyChanged = onchange;
		onchange((val) => {
			this.isReady = val;
		});

		const page = new Observable<Page>();
		this.onActivePageChanged = page.onchange;
		this.setActivePage = page.setValue;
		page.onchange((val) => {
			this.activePage = val;
		});
	}
}

type OnReportReady = (report: Report) => void;
