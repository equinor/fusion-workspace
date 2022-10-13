import { Subject } from 'rxjs';

export function createErrorService<TError extends Record<PropertyKey, unknown>>() {
	const errorSubject = new Subject<TError>();
	return {
		error: (click: TError) => errorSubject.next(click),
		error$: errorSubject.asObservable(),
		complete: errorSubject.complete,
	};
}
