import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionWorkspaceController, WorkspaceTabNames } from '../types';

export function addViewController<TData, TError>(workspaceController: FusionWorkspaceController<TData, TError>) {
	workspaceController.addController({
		name: 'view',
		controller: new WorkspaceViewController<WorkspaceTabNames, TError>([], 'grid'),
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		config,
	});
}

function config<TData, TError, TContext>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	workspaceController: FusionWorkspaceController<TData, TError>
	// eslint-disable-next-line @typescript-eslint/no-empty-function
) {}
