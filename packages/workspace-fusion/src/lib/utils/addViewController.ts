import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionWorkspaceController, WorkspaceTabNames } from '../types';

export function addViewController<TData, TError>(
	appKey: string,
	workspaceController: FusionWorkspaceController<TData, TError>
) {
	workspaceController.addController({
		name: 'view',
		controller: new WorkspaceViewController<WorkspaceTabNames, TError>(appKey, [], 'grid'),
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		config,
	});
}

function config<TData, TError>(
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	workspaceController: FusionWorkspaceController<TData, TError>
	// eslint-disable-next-line @typescript-eslint/no-empty-function
) {}
