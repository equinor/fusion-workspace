import { useState } from 'react';
import { Workspace as WorkspaceView, WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
import {
	FusionMediator,
	FusionWorkspaceError,
	WorkspaceConfiguration,
	WorkspaceProps,
	WorkspaceTabNames,
} from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { BaseEvent } from '@equinor/workspace-core';
import { DataSourceProvider } from '../integrations/data-source';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';

/** Only gets called once */
const useStable = <T,>(val: T) => {
	return useState(() => val)[0];
};

function useCheckParentClient(): QueryClient | undefined {
	try {
		return useQueryClient();
	} catch {
		return;
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
	const viewController = useStable(
		new WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>(props.workspaceOptions.defaultTab)
	);

	const maybeClient = useCheckParentClient();
	const client = useStable(maybeClient ?? new QueryClient());

	const configuration = useStable<
		WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>
	>(createConfigurationObject(props, mediator, viewController));

	return (
		<QueryClientProvider client={client}>
			<DataSourceProvider mediator={mediator as any} config={props.dataOptions}>
				<WorkspaceView controller={configuration.viewController} />
			</DataSourceProvider>
		</QueryClientProvider>
	);
}
