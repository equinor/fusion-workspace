import { Subject } from 'rxjs';
import { ServiceCtor } from '../../types/serviceCtor';

export function createErrorService<TError extends Record<PropertyKey, unknown>>(destroy: ServiceCtor) {
	const errorSubject = new Subject<TError>();
	destroy(() => errorSubject.complete());

	return {
		error: (click: TError) => errorSubject.next(click),
		error$: errorSubject.asObservable(),
		complete: errorSubject.complete,
	};
}
