import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceController } from '@workspace/workspace-core';
import { WorkspaceControllers, WorkspaceOnClick, WorkspaceTabNames } from '../types';

export function addViewController<TData, TError, TContext>(
	workspaceController: WorkspaceController<
		TData,
		WorkspaceControllers<TData>,
		WorkspaceOnClick<TData>,
		TError,
		TContext
	>
) {
	workspaceController.addController({
		name: 'view',
		controller: new WorkspaceViewController<WorkspaceTabNames, TError>([], 'grid'),
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		config,
	});
}

function config<TData, TError, TContext>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	workspaceController: WorkspaceController<
		TData,
		WorkspaceControllers<TData>,
		WorkspaceOnClick<TData>,
		TError,
		TContext
	>
	// eslint-disable-next-line @typescript-eslint/no-empty-function
) {}
