import { createEventService } from '../utils/services/eventService';
import { ObjectType, BaseEvent } from '../types';
import {
  createErrorService,
  createSelectionService,
  createBookmarksService,
  createUrlService,
  createContextService,
} from '../utils';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 * [Workspace Mediator](https://equinor.github.io/fusion-workspace/packages/workspace-core/mediator)
 */
export class WorkspaceMediator<
  _TUnused extends any,
  TNode,
  TSidesheetEvents extends BaseEvent,
  TError extends ObjectType<TError> = ObjectType<unknown>,
  TBookmarkState extends Record<PropertyKey, unknown> = ObjectType<unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
> {
  #destructors = new Array<VoidFunction>();

  #appendDestructor = (destructor: VoidFunction) => {
    this.#destructors.push(destructor);
  };

  bookmarkService = createBookmarksService<TBookmarkState>(this.#appendDestructor);

  urlService = createUrlService(this.#appendDestructor);

  selectionService = createSelectionService<TNode>(this.#appendDestructor);

  sidesheetService = createEventService<TSidesheetEvents>(this.#appendDestructor);

  errorService = createErrorService<TError>(this.#appendDestructor);

  contextService = createContextService<TContext>(this.#appendDestructor);
}
