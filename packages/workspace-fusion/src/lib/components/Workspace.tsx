import { useRef } from 'react';
import { useEffectOnce, Workspace as WorkspaceView } from '@equinor/workspace-react';
import { WorkspaceConfiguration, WorkspaceProps } from '../types';

import { didOptionsChange } from '../utils/optionsChanged/didOptionsChange';
import { createConfigurationObject } from '../utils/createWorkspaceConfig';
import { BaseEvent } from '@equinor/workspace-core';

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never,
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
			props.onWorkspaceReady({ api: configuration.current.mediator });
		}
	});

	return <WorkspaceView controller={configuration.current.viewController} />;
}

<Workspace<{ id: string }, {}, { type: 'create' }>
	onWorkspaceReady={(ev) => {
		ev.api.sidesheetService.sendEvent({ type: 'details_sidesheet', props: { id: '123', item: { id: '123' } } });
		ev.api.sidesheetService.sendEvent({ type: 'create' });
	}}
	workspaceOptions={{ appKey: '', getIdentifier: () => '' }}
	Sidesheet={(ev) => {
		if (ev.type === 'details_sidesheet') {
			ev.props.id;
		}
		if (ev.type === 'create') {
			ev;
		}

		return <></>;
	}}
/>;
