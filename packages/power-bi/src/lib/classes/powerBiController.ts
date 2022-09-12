import { OnchangeCallback, Observable } from '@workspace/workspace-core';
import { IReportEmbedConfiguration } from 'powerbi-client';
import { GetPowerBiEmbedConfig } from '../types/embedConfig';
import { Filter } from '../types/filter';

export class PowerBiController {
	pageId?: string;

	pageTitle?: string;

	reportUri: string;

	filter?: Filter[];

	config?: IReportEmbedConfiguration;

	getConfig?: GetPowerBiEmbedConfig;

	isReady = false;

	setIsReady: (value: boolean) => void;

	onIsReadyChanged: (callback: OnchangeCallback<boolean>) => () => void;

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
	}
}
