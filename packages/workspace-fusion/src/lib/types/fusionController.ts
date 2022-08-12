import { Mediator } from '@workspace/workspace-core';
import { WorkspaceContext } from '../classes/fusionWorkspaceBuilder';
import { WorkspaceControllers } from './controllers';
import { WorkspaceOnClick } from './onClick';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionWorkspaceController<TData, TError> = Mediator<
	TData,
	WorkspaceOnClick<TData>,
	TError,
	WorkspaceContext
>;
