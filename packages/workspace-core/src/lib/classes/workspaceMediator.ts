import { ObjectType } from '../types';
import { Observable } from './observable';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 */
export class WorkspaceMediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TContext extends ObjectType<TContext> = ObjectType<unknown>
> {
	data = new Observable<TData[]>();

	filteredData = new Observable<TData[]>();

	onclick = new Observable<TOnClick>();

	context = new Observable<TContext>();

	error = new Observable<TError>();
	/** Fetches data */
	fetch?: () => void;

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
