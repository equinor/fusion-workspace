import { Subject } from 'rxjs';
import { ServiceCtor } from '../../types/serviceCtor';

export function createClickService<TOnClick extends Record<PropertyKey, unknown>>(destroy: ServiceCtor) {
	const clickSubject = new Subject<TOnClick>();
	return {
		click: (click: TOnClick) => clickSubject.next(click),
		click$: clickSubject.asObservable(),
		complete: clickSubject.complete,
	};
}
