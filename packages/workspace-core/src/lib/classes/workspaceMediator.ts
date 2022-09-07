import { ObjectType } from '../types';
import { BookmarkService } from './bookmarkService';
import { ClickService } from './clickService/clickService';
import { DataService } from './dataService';
import { ErrorService } from './errorService';
import { SelectionService } from './selectionService';
import { URLService } from './urlService/urlService';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 */
export class WorkspaceMediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
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

	bookmarkService = new BookmarkService<TBookmarkState>();

	selectionService = new SelectionService();

	urlService = new URLService();

	dataService = new DataService<TData>();

	clickService = new ClickService<TOnClick>();

	errorService = new ErrorService<TError>();

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
