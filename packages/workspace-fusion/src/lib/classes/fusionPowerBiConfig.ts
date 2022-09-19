import type { Fusion } from '@equinor/fusion-framework';

async function getFusionClient() {
	if (!window?.['Fusion']) {
		throw new Error('No fusion framework found, required for .addFusionPowerBi to work');
	}
	const fusion = window['Fusion'] as Fusion;
	if (!fusion.modules.serviceDiscovery) {
		throw new Error('Service discovery module not configured, required for .addFusionPowerBi to work');
	}

	const client = await fusion.modules.serviceDiscovery.createClient('reports');
	return client;
}

export class FusionPowerBiConfigurator {
	static getEmbedInfo = async (reportUri: string) => {
		const client = await getFusionClient();
		const embedUri = `/reports/${reportUri}/config/embedinfo`;
		const response = await client.fetch(embedUri);

		const data = await response.json();
		return data;
	};

	static getToken = async (reportUri: string) => {
		const client = await getFusionClient();
		return await (await client.fetch(`/reports/${reportUri}/token`)).json();
	};
}
