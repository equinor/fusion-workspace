import { useRef } from 'react';
import { useEffectOnce, Workspace as WorkspaceView } from '@equinor/workspace-react';
import { WorkspaceConfiguration, WorkspaceProps } from '../types';

import { didOptionsChange } from '../utils/optionsChanged/didOptionsChange';
import { createConfigurationObject } from '../utils/createWorkspaceConfig';
import { createWorkspaceController } from '../utils/createWorkspaceController';
import { BaseEvent } from '@equinor/workspace-core';

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>) {
	const configuration = useRef<
		WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>
	>(createConfigurationObject(props));

	/**
	 * Triggers on every parent render and updates configuration accordingly
	 * Careful with doing complex operations in here
	 */
	didOptionsChange(props, configuration.current);

	/**
	 * Calls user's callback to pass the api
	 * TODO: Proxy wrapped DTO!
	 */
	useEffectOnce(() => {
		if (props.onWorkspaceReady) {
			props.onWorkspaceReady({ api: createWorkspaceController(configuration.current.mediator) });
		}
	});

	return <WorkspaceView controller={configuration.current.viewController} />;
}
