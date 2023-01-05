import { PropsWithChildren, useRef } from 'react';
import { useEffectOnce, Workspace as WorkspaceView } from '@equinor/workspace-react';
import { WorkspaceConfiguration, WorkspaceProps } from '../types';
import { NodeStoreProvider } from '@equinor/workspace-render-up';

import { didOptionsChange } from '../utils/optionsChanged/didOptionsChange';
import { createConfigurationObject } from '../utils/createWorkspaceConfig';
import { createWorkspaceController } from '../utils/createWorkspaceController';
import { BaseEvent } from '@equinor/workspace-core';
import { useStatusBar } from '../integrations/status-bar';
import { Filter } from '@equinor/workspace-filter';
import { useWorkspaceComponents } from '../hooks/useWorkspaceComponents';
import { Icon } from '@equinor/eds-core-react';
import { add } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

Icon.add({ add });

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

	return (
		<NodeStoreProvider>
			<CreateSidesheetHandler props={props}>
				<WorkspaceView controller={configuration.current.viewController} />;
			</CreateSidesheetHandler>
		</NodeStoreProvider>
	);
}

function CreateSidesheetHandler({ children, props }: PropsWithChildren<{ props: any }>) {
	useCreateButton(props);
	return <>{children}</>;
}

const useCreateButton = (props: any) =>
	useWorkspaceComponents('create_button', () => {
		switch (props.sidesheetOptions?.type) {
			case 'custom': {
				//Determine if create is active?
				return null;
			}

			case 'default': {
				if (props.sidesheetOptions.CreateSidesheet) {
					return <Icon name="add" color={tokens.colors.interactive.primary__resting.hex} />;
				}
				return null;
			}

			default: {
				return null;
			}
		}
	});

export const componentStore = {
	filter: {
		renderKey: 'filter',
		fallback: <Filter />,
	},
	header_left: {
		renderKey: 'header_left',
		fallback: <StatusBar />,
	},
	view_settings: {
		renderKey: 'view_settings',
	},
	create_button: {
		renderKey: 'create_button',
	},
};

function StatusBar() {
	const StatusBar = useStatusBar();
	if (!StatusBar) return null;
	return <StatusBar />;
}
