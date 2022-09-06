import { WorkspaceViewController } from '@equinor/workspace-react';
import { AppConfig, WorkspaceTabNames } from '../types';

export function addConfig<TError>(
	config: AppConfig<WorkspaceTabNames>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	viewController.appKey = config.appKey;
	viewController.appColor = config.appColor;
}
