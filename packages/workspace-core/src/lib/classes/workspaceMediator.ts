import { createEventService } from '../utils/services/eventService';
import { ObjectType, BaseEvent } from '../types';
import {
	createErrorService,
	createDataService,
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
	TData,
	TNode,
	TSidesheetEvents extends BaseEvent<string>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TBookmarkState extends Record<PropertyKey, unknown> = ObjectType<unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> {
	/**
	 * Callback that returns an instance of itself
	 * Helpful when chaining
	 */
	addMiddleware = (cb: (mediator: this) => void) => {
		cb(this);
		return this;
	};

	#destructors = new Array<VoidFunction>();

	#appendDestructor = (destructor: VoidFunction) => {
		this.#destructors.push(destructor);
	};

	bookmarkService = createBookmarksService<TBookmarkState>(this.#appendDestructor);

	urlService = createUrlService(this.#appendDestructor);

	selectionService = createSelectionService<TNode>(this.#appendDestructor);

	sidesheetService = createEventService<TSidesheetEvents>(this.#appendDestructor);

	dataService = createDataService<TData>(this.#appendDestructor);

	errorService = createErrorService<TError>(this.#appendDestructor);

	contextService = createContextService<TContext>(this.#appendDestructor);

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		this.#destructors.forEach((destroy) => destroy());
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
