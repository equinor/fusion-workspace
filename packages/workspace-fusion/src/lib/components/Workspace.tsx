import { useEffect, useState } from 'react';
import { Workspace as WorkspaceView, WorkspaceReactMediator } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceConfiguration, WorkspaceProps } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { BaseEvent } from '@equinor/workspace-core';
import { DataSourceProvider } from '../integrations/data-source';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { fusionQueryParams, updateQueryParams } from '../classes/fusionUrlHandler';
import history from 'history/browser';
import { BrowserHistory } from 'history';

/** Only gets called once */
const useStable = <T,>(val: T) => {
	return useState(() => val)[0];
};

function useCheckParentClient(): QueryClient {
	try {
		return useQueryClient();
	} catch {
		return new QueryClient();
	}
}

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>) {
	const mediator = useStable<FusionMediator<TData, TContext, TCustomSidesheetEvents>>(
		new WorkspaceReactMediator(props.workspaceOptions.getIdentifier)
	);

	const maybeClient = useCheckParentClient();
	const client = useStable(maybeClient);

	const configuration = useStable<WorkspaceConfiguration>(createConfigurationObject(props, mediator));

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

/**
 * Cleans up all query params used by fusion workspace when unmounting
 */
export const useCleanupQueryParams = (mediator: FusionMediator<any, any, any>, history: BrowserHistory) =>
	useEffect(
		() => () =>
			updateQueryParams(
				fusionQueryParams.map((param) => [param, undefined]),
				mediator,
				history
			)
	);
