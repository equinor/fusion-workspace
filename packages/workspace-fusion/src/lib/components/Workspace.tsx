import { useRef, useState } from 'react';
import {
	useEffectOnce,
	Workspace as WorkspaceView,
	WorkspaceReactMediator,
	WorkspaceViewController,
} from '@equinor/workspace-react';
import {
	FusionMediator,
	FusionWorkspaceError,
	WorkspaceConfiguration,
	WorkspaceProps,
	WorkspaceTabNames,
} from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';
import { createWorkspaceController } from '../utils/createWorkspaceController';
import { BaseEvent } from '@equinor/workspace-core';
import { DataSourceProvider } from '../integrations/data-source';
import { QueryClient, QueryClientProvider } from 'react-query';

/** Only gets called once */
const useStable = <T,>(val: T) => {
	return useState(() => val)[0];
};

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
	const client = useStable(new QueryClient());

	const configuration = useStable<
		WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>
	>(createConfigurationObject(props, mediator, viewController));

	/**
	 * Calls user's callback to pass the api
	 * TODO: Proxy wrapped DTO!
	 */
	// useEffectOnce(() => {
	// 	if (props.onWorkspaceReady) {
	// 		props.onWorkspaceReady({ api: createWorkspaceController(configuration.mediator) });
	// 	}
	// });

	return (
		<QueryClientProvider client={client}>
			<DataSourceProvider config={props.dataOptions}>
				<WorkspaceView controller={configuration.viewController} />
			</DataSourceProvider>
		</QueryClientProvider>
	);
}
