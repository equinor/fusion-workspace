import { useState } from 'react';
import { Workspace as WorkspaceView, WorkspaceReactMediator } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceConfiguration, WorkspaceProps } from '../types';

import { createConfigurationObject } from '../utils/createWorkspaceConfig';

import { BaseEvent } from '@equinor/workspace-core';
import { DataSourceProvider, useQueryContext } from '../integrations/data-source';
import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from 'react-query';

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

	const maybeClient = useCheckParentClient();
	const client = useStable(maybeClient ?? new QueryClient());

	const configuration = useStable<
		WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>
	>(createConfigurationObject(props, mediator));

	return (
		<QueryClientProvider client={client}>
			<DataSourceProvider mediator={mediator as any} config={props.dataOptions}>
				<WorkspaceWrapper
					Sidesheet={configuration.Sidesheet}
					providers={configuration.providers}
					defaultTab={props.workspaceOptions.defaultTab}
					tabs={configuration.tabs}
				/>
			</DataSourceProvider>
		</QueryClientProvider>
	);
}

type Props = {
	providers: any;
	defaultTab: any;
	tabs: any[];
	Sidesheet: any;
};

function WorkspaceWrapper({ defaultTab, providers, tabs, Sidesheet }: Props) {
	const { isLoading } = useQuery(useQueryContext());

	return (
		<WorkspaceView
			isLoading={isLoading}
			providers={providers}
			tabs={tabs}
			Sidesheet={Sidesheet}
			defaultTab={defaultTab}
		/>
	);
}
