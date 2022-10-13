import { ObjectType } from '../types';
import {
	createClickService,
	createErrorService,
	createDataService,
	createSelectionService,
	createBookmarksService,
} from '../utils';
import { URLService } from './urlService/urlService';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 * [Workspace Mediator](https://equinor.github.io/fusion-workspace/packages/workspace-core/mediator)
 */
export class WorkspaceMediator<
	TData,
	TOnClick extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TBookmarkState extends Record<PropertyKey, unknown> = ObjectType<unknown>
> {
	/**
	 * Callback that returns an instance of itself
	 * Helpful when chaining
	 */
	addMiddleware = (cb: (mediator: this) => void) => {
		cb(this);
		return this;
	};

	bookmarkService = createBookmarksService<TBookmarkState>();

	urlService = new URLService();

	selectionService = createSelectionService();

	dataService = createDataService<TData>();

	clickService = createClickService<TOnClick>();

	errorService = createErrorService<TError>();

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
