import { useState } from 'react';
import { Workspace as WorkspaceView, WorkspaceReactMediator } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceConfiguration, WorkspaceProps } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { BaseEvent } from '@equinor/workspace-core';
import { DataSourceProvider } from '../integrations/data-source';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { updateQueryParams, useCleanupQueryParams } from '../classes/fusionUrlHandler';
import history from 'history/browser';

const client = new QueryClient();

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>) {
	const [mediator] = useState<FusionMediator<TData, TContext, TCustomSidesheetEvents>>(
		new WorkspaceReactMediator(props.workspaceOptions.getIdentifier)
	);

	const client = useCheckParentClient();

	const [configuration] = useState<WorkspaceConfiguration>(createConfigurationObject(props, mediator));

	useCleanupQueryParams(mediator, history);

	return (
		<QueryClientProvider client={client}>
			<DataSourceProvider mediator={mediator as any} config={props.dataOptions}>
				<WorkspaceView
					Sidesheet={configuration.Sidesheet}
					providers={configuration.providers}
					defaultTab={props.workspaceOptions.defaultTab}
					tabs={configuration.tabs}
					events={{
						onTabChange: (newTab) => {
							updateQueryParams([['tab', newTab.name]], mediator, history);
						},
					}}
				/>
			</DataSourceProvider>
		</QueryClientProvider>
	);
}

/** Tries to use the surrounding queryClient if there is one, otherwise it creates a new one */
function useCheckParentClient(): QueryClient {
	try {
		return useQueryClient();
	} catch {
		return client;
	}
}
