import { ComponentRenderArgs, IAppConfigurator, makeComponent } from '@equinor/fusion-framework-react-app';
import { enableAgGrid } from '@equinor/fusion-framework-module-ag-grid';
import { useHttpClient } from '@equinor/fusion-framework-react-app/http';

import { StrictMode, useCallback } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Workspace } from '@equinor/workspace-fusion';
import { createGlobalStyle } from 'styled-components';
import { DateTime } from 'luxon';

const dataProxy = {
	clientId: '5a842df8-3238-415d-b168-9f16a6a6031b',
	uri: 'https://pro-s-context-CI.azurewebsites.net',
	defaultScopes: ['5a842df8-3238-415d-b168-9f16a6a6031b/.default'],
};

export type Type = {
	id: string;
	isChildType: boolean;
	parentTypeIds: string[];
};

export type Context = {
	id: string;
	externalId: string;
	source: string;
	type: Type;
	value: string;
	title: string;
	isActive: boolean;
	isDeleted: boolean;
	created: Date;
	updated: Date;
};

const configure = async (config: IAppConfigurator) => {
	config.configureHttpClient('data-proxy', {
		baseUri: dataProxy.uri,
		defaultScopes: dataProxy.defaultScopes,
	});
	enableAgGrid(config);
};

const GlobalStyle = createGlobalStyle`
.body {
margin: 0
}
`;

const MyApp = () => {
	const client = useHttpClient('data-proxy');

	const getResponseAsync = useCallback(async () => {
		const commpkgs = await client.fetch(`/contexts`);
		return commpkgs;
	}, [dataProxy]);

	return (
		<StrictMode>
			<GlobalStyle />
			<div style={{ height: '100vh', margin: 0 }}>
				<Workspace<Context>
					workspaceOptions={{ appKey: 'context', getIdentifier: (s) => s.externalId }}
					statusBarOptions={(data) => [
						{ title: 'Count', value: data.length },
						{ title: 'Project type', value: data.filter((s) => s.type.id === 'Project').length },
					]}
					gridOptions={{
						columnDefinitions: [
							{ field: 'id' },
							{ field: 'externalId' },
							{ headerName: 'type', valueGetter: (s) => s.data?.type.id },
							{ field: 'title' },
							{
								field: 'updated',
								valueGetter: (s) => s.data && new Date(s.data.updated).toLocaleDateString('no'),
							},
							{
								field: 'created',
								valueGetter: (s) => s.data && new Date(s.data.created).toLocaleDateString('no'),
							},
							{ field: 'source' },
							{ field: 'isActive', valueGetter: (s) => (s.data?.isActive ? 'yes' : 'no') },
							{ field: 'isDeleted', valueGetter: (s) => (s.data?.isDeleted ? 'yes' : 'no') },
						],
						gridOptions: { pagination: true, paginationPageSize: 100 },
					}}
					filterOptions={{
						filterGroups: [
							{ name: 'Type', valueFormatter: (s) => s.type.id, isQuickFilter: true },
							{
								name: 'isActive',
								defaultUncheckedValues: ['No'],
								valueFormatter: (s) => (s.isActive ? 'Yes' : 'No'),
								isQuickFilter: true,
							},
							{
								name: 'isDeleted',
								defaultUncheckedValues: ['Yes'],
								isQuickFilter: true,
								valueFormatter: (s) => (s.isDeleted ? 'Yes' : 'No'),
							},
						],
					}}
					onWorkspaceReady={(a) => {
						a.api.dataService.data = [{ externalId: '123' } as any];
					}}
					dataOptions={{ getResponseAsync }}
					sidesheetOptions={{
						Sidesheet: (props) => {
							return <div style={{ height: '100%' }}>{props.id}</div>;
						},
					}}
				/>
			</div>
		</StrictMode>
	);
};

export default function render(el: HTMLElement, args: ComponentRenderArgs) {
	/** Create root from provided element */
	const root = createRoot(el);

	/** Make the app component
	 * First argument is the main React component
	 * Second argu is the the render args (framework and env variables)
	 * Third argument is the configuration callback
	 */
	const AppComponent = makeComponent(<MyApp />, args, configure);

	root.render(<AppComponent />);

	/** Teardown */
	return () => root.unmount();
}
