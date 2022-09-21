import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { WorkspaceContext } from '../classes/fusionWorkspaceBuilder';
import { FusionBookmark } from './fusionBookmark';
import { WorkspaceOnClick } from './onClick';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<TData> = WorkspaceReactMediator<
	TData,
	WorkspaceOnClick<TData>,
	FusionWorkspaceError,
	WorkspaceContext,
	FusionBookmark<TData>
>;

export type FusionWorkspaceError = {
	code: number;
	detail: string;
	title: string;
};
