import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceController } from '@workspace/workspace-core';
import { WorkspaceControllers, WorkspaceOnClick, WorkspaceTabNames } from '../types';

export function addViewController<TData, TError, TContext>(
	wc: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
) {
	wc.addController({
		name: 'view',
		controller: new WorkspaceViewController<WorkspaceTabNames, TError>([], 'grid'),
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		config,
	});
}

function config<TData, TError, TContext>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	wc: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
	// eslint-disable-next-line @typescript-eslint/no-empty-function
) {}
