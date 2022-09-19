import { IReportEmbedConfiguration, Page, Report } from 'powerbi-client';
import { ICustomEvent } from 'service';
import { Callback, OnchangeCallback } from '../types';
import { GetPowerBiEmbedConfig } from '../types/embedConfig';
import { Filter } from '../types/filter';
import { Observable } from './observable';

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

	private cb: Callback<Report>[] = [];

	onReportReady = (callback: OnReportReady) => {
		const id = Math.random() * 16;
		this.cb.push({ callback, id });
		return () => {
			this.cb.filter((s) => s.id !== id);
		};
	};

	reportReady = (newValue: Report) => {
		newValue.on('pageChanged', (page: ICustomEvent<any>) => {
			this.setActivePage(page.detail.newPage);
		});
		this.cb.map(({ callback }) => callback).forEach((callback) => callback(newValue));
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
