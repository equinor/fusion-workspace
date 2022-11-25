import { ComponentRenderArgs, IAppConfigurator, makeComponent } from '@equinor/fusion-framework-react-app';
import { enableAgGrid } from '@equinor/fusion-framework-module-ag-grid';
import { useHttpClient } from '@equinor/fusion-framework-react-app/http';

import { StrictMode, useCallback } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Workspace } from '@equinor/workspace-fusion';
import styled, { createGlobalStyle } from 'styled-components';

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

type Value = {
	isValid: boolean;
	projectMasterId: null;
	wbs: string;
};

export type Context = {
	id: string;
	externalId: string;
	source: string;
	type: Type;
	value: Value;
	title: string;
	isActive: boolean;
	isDeleted: boolean;
	created: string;
	updated: string;
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
margin: -17px;
}
`;

const MyApp = () => {
	const client = useHttpClient('data-proxy');

	const getResponseAsync = useCallback(async () => client.fetch(`/contexts`), [dataProxy]);

	return (
		<StrictMode>
			<GlobalStyle />
			<div style={{ height: '100vh', margin: 0 }}>
				<Workspace<Context, {}>
					workspaceOptions={{ appKey: 'context', getIdentifier: (s) => s.externalId, defaultTab: 'grid' }}
					statusBarOptions={(data) => [
						{ title: 'Count', value: data.length },
						{ title: 'Project type', value: data.filter((s) => s.type?.id === 'Project').length },
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
							{ field: 'WBS', valueGetter: (s) => s.data?.value.wbs },
							{
								field: 'Project master id',
								valueGetter: (s) => s.data?.value.projectMasterId,
								hide: true,
							},
							{ field: 'isActive', valueGetter: (s) => (s.data?.isActive ? 'yes' : 'no') },
							{ field: 'isDeleted', valueGetter: (s) => (s.data?.isDeleted ? 'yes' : 'no') },
						],
						gridOptions: { pagination: true, paginationPageSize: 100 },
					}}
					filterOptions={{
						filterGroups: [
							{ name: 'Type', valueFormatter: (s) => s.type?.id ?? null, isQuickFilter: true },
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
					gardenOptions={{
						getDisplayName: (s) => s.title,
						fieldSettings: { type: { getKey: (s) => s?.type?.id } },
						initialGrouping: { horizontalGroupingAccessor: 'type', verticalGroupingKeys: [] },
						visuals: {
							calculateItemWidth: (s) => 300,
						},
					}}
					dataOptions={{ getResponseAsync }}
					sidesheetOptions={{
						Sidesheet: (props) =>
							props.item ? <ContextSidesheet id={props.id} item={props.item} /> : <></>,
					}}
				/>
			</div>
		</StrictMode>
	);
};

const StyledSidesheetWrapper = styled.div`
	height: 100%;
	width: 800px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-weight: 500;
	font-size: 24px;
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	margin-left: 10px;
`;

const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export function ContextSidesheet(props: { id: string; item: Context }) {
	if (!props.item) return null;

	return (
		<StyledSidesheetWrapper>
			<div>
				<TitleWrapper>
					<Title>{props.item.title}</Title>
				</TitleWrapper>
			</div>
			<BodyWrapper>
				{props.item.value.wbs && <div>WBS: {props.item.value.wbs}</div>}
				<div>Type: {props.item.type.id}</div>
				<div>Created: {new Date(props.item.created).toLocaleDateString('no')}</div>
				{props.item.updated && <div>Updated: {new Date(props.item.updated).toLocaleDateString('no')}</div>}
			</BodyWrapper>
		</StyledSidesheetWrapper>
	);
}

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
