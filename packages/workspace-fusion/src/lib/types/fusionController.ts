import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { FusionBookmark } from './fusionBookmark';
import { WorkspaceOnClick } from './event';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = WorkspaceReactMediator<TData, WorkspaceNode<TData>, FusionWorkspaceError, TContext, FusionBookmark<TData>>;

export type WorkspaceNode<TData> = {
	id: string;
	item?: TData;
};

export type FusionWorkspaceError = {
	code: number;
	detail: string;
	title: string;
};
