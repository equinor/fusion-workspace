import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { WorkspaceContext } from '../classes/fusionWorkspaceBuilder';
import { WorkspaceOnClick } from './onClick';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<TData, TError> = WorkspaceReactMediator<
	TData,
	WorkspaceOnClick<TData>,
	TError,
	WorkspaceContext
>;
