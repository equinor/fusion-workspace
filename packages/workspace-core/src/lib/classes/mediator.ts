import { ObjectType } from '../types';
import { Observable } from './observable';

/**
 * Class to act as a mediator in the workspace
 * Should have all common topics included in its declaration
 */
export class Mediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TContext extends ObjectType<TContext> = ObjectType<unknown>
> {
	data = new Observable<TData[]>();
	filteredData = new Observable<TData[]>();
	isSidesheetOpen = new Observable(false);
	isFilterOpen = new Observable(false);
	onclick = new Observable<TOnClick>();
	context = new Observable<TContext>();
	error = new Observable<TError>();
}
