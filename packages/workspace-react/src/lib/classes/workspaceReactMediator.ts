import { BaseEvent, ObjectType, Observable, OnchangeCallback, WorkspaceMediator } from '@equinor/workspace-core';

export class WorkspaceReactMediator<
  TData,
  TNode,
  TSidesheetEvents extends BaseEvent,
  TError extends ObjectType<TError> = ObjectType<unknown>,
  TContext extends ObjectType<TContext> = ObjectType<unknown>,
  TBookmarkState extends ObjectType<TBookmarkState> = ObjectType<unknown>
> extends WorkspaceMediator<TData, TNode, TSidesheetEvents, TError, TBookmarkState, TContext> {
  /**
   * Callback that returns an instance of itself
   * Helpful when chaining
   */
  override addMiddleware = (cb: (mediator: this) => void) => {
    cb(this);
    return this;
  };

  isLoading = false;

  setIsLoading: (value: boolean) => void;

  onIsLoadingChange: (callback: OnchangeCallback<boolean>) => () => void;

  getIdentifier: (item: TData) => string;

  constructor(getIdentifier: (item: TData) => string) {
    super();
    this.getIdentifier = getIdentifier;

    const isLoading = new Observable(this.isLoading);
    isLoading.onchange((val) => {
      this.isLoading = val;
    });
    this.setIsLoading = isLoading.setValue;
    this.onIsLoadingChange = isLoading.onchange;
  }
}
