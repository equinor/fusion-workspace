import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionBookmark } from './fusionBookmark';
import { IsNeverType } from './typescriptUtils/isNeverType';
import { CreateSidesheetEvent, DetailSidesheetEvent } from '../integrations/sidesheet';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
> = WorkspaceReactMediator<
	TData,
	WorkspaceNode<TData>,
	IsNeverType<
		TCustomSidesheetEvents,
		WorkspaceSidesheets<TData>,
		TCustomSidesheetEvents | WorkspaceSidesheets<TData>
	>,
	FusionWorkspaceError,
	TContext,
	FusionBookmark<TData>
>;

export type WorkspaceSidesheets<TData extends Record<PropertyKey, unknown>> =
	| DetailSidesheetEvent<TData>
	| CreateSidesheetEvent;

export type WorkspaceNode<TData> = {
	id: string;
	item?: TData;
};

export type FusionWorkspaceError = {
	code: number;
	detail: string;
	title: string;
};
