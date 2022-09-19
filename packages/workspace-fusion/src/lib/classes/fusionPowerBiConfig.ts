import { FusionClient } from '../types';

export class FusionPowerBiConfigurator {
	static getEmbedInfo = async (reportUri: string, client: FusionClient) => {
		const embedUri = `https://pro-s-reports-ci.azurewebsites.net/reports/${reportUri}/config/embedinfo`;
		const response = await client.fetch(embedUri);

		const data = await response.json();
		return data;
	};

	static getToken = async (reportUri: string, client: FusionClient) => {
		return await (
			await client.fetch(`https://pro-s-reports-ci.azurewebsites.net/reports/${reportUri}/token`)
		).json();
	};
}
