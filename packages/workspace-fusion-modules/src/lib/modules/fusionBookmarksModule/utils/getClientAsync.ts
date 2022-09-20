import { IHttpClient } from '@equinor/fusion-framework-module-http';
//Re-declares window object
import '@equinor/fusion-framework';

export async function getFusionClient(): Promise<IHttpClient> {
	if (!window?.Fusion) {
		throw new Error('No fusion framework found, required for fusion bookmarks module to work');
	}
	const fusion = window.Fusion;
	if (!fusion.modules.serviceDiscovery) {
		throw new Error('Service discovery module not configured, required for fusion bookmarks module to work');
	}

	const client = await fusion.modules.serviceDiscovery.createClient('bookmarks');
	return client;
}
