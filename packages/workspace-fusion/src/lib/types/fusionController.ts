import { WorkspaceController } from '@workspace/workspace-core';
import { FusionContext } from '../classes/fusionWorkspaceBuilder';
import { WorkspaceControllers } from './controllers';
import { WorkspaceOnClick } from './onClick';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionWorkspaceController<TData, TError> = WorkspaceController<
	TData,
	WorkspaceControllers<TData>,
	WorkspaceOnClick<TData>,
	TError,
	FusionContext
>;
