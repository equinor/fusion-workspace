import { WorkspaceController } from '@workspace/workspace-core';
import { WorkspaceControllers } from './controllers';
import { WorkspaceOnClick } from './onClick';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionWorkspaceController<TData, TError, TContext> = WorkspaceController<
	TData,
	WorkspaceControllers<TData>,
	WorkspaceOnClick<TData>,
	TError,
	TContext
>;
