import { Subject } from 'rxjs';
import { postChangeEvent } from '../postChangeEvent';

export function createErrorService<TError extends Record<PropertyKey, unknown>>() {
	const errorSubject = new Subject<TError>();
	return {
		error: (error: TError, origin: string) => {
			postChangeEvent({ newVal: error, origin: origin, target: 'error', timestamp: new Date(), type: 'audit' });
			errorSubject.next(error);
		},
		error$: errorSubject.asObservable(),
		complete: errorSubject.complete,
	};
}
