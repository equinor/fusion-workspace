import { BaseEvent, WorkspaceMediator } from '@equinor/workspace-core';
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
> = WorkspaceMediator<
  TData,
  WorkspaceNode<TData>,
  IsNeverType<TCustomSidesheetEvents, WorkspaceSidesheets<TData>, TCustomSidesheetEvents | WorkspaceSidesheets<TData>>,
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

/** API for manipulating the workspace */
export type WorkspaceController<
  TData extends Record<PropertyKey, unknown>,
  TCustomSidesheetEvents extends BaseEvent = never,
  TContext extends Record<PropertyKey, unknown> = never
> = {
  /**
   * Sets the data supplied to the workspace
   * !important a new call to fetch data will overwrite this
   */
  setData: (newData: TData[]) => void;
  /**
   * Sets a new error on workspace
   */
  setError: (error: FusionWorkspaceError) => void;
  /** Sets a custom view state for one or more components in the workspace */
  setBookmark: (bookmark: FusionBookmark<TData>) => void;
  /**
   * Calculates a new context to supply to the workspace
   * Will be overwritten if contextOptions are supplied
   */
  setContext: (newContext: (filteredData: TData[]) => TContext) => void;

  openSidesheet: (
    ev: IsNeverType<
      TCustomSidesheetEvents,
      WorkspaceSidesheets<TData>,
      TCustomSidesheetEvents | WorkspaceSidesheets<TData>
    >
  ) => void;

  api: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
};
