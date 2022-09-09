import { createFrameworkProvider } from '@equinor/fusion-framework-react';
import React from 'react';

export const Framework = createFrameworkProvider<[]>(async (config) => {
	config.auth.configureDefault({
		tenantId: '3aa4a235-b6e2-48d5-9195-7fcf05b459b0',
		clientId: '9b707e3a-3e90-41ed-a47e-652a1e3b53d0',
		redirectUri: '/authentication/login-callback',
	});

	config.http.configureClient('service_discovery', {
		baseUri: 'https://pro-s-portal-ci.azurewebsites.net',
		defaultScopes: ['97978493-9777-4d48-b38a-67b0b9cd88d2/.default'],
	});

	config.http.configureClient('portal', {
		baseUri: 'https://pro-s-portal-ci.azurewebsites.net',
		defaultScopes: ['5a842df8-3238-415d-b168-9f16a6a6031b/.default'],
	});

	config.onAfterInit(async (fusion) => {
		await fusion.auth.handleRedirect();
		if (!fusion.auth.defaultAccount) {
			await fusion.auth.login();
		}
	});
}, []) as React.LazyExoticComponent<React.FunctionComponent<{ children?: React.ReactNode }>>;
