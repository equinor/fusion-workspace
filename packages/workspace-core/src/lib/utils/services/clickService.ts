import { Subject } from 'rxjs';

export function createClickService<TOnClick extends Record<PropertyKey, unknown>>() {
	const clickSubject = new Subject<TOnClick>();
	return {
		click: (click: TOnClick) => clickSubject.next(click),
		click$: clickSubject.asObservable(),
		complete: clickSubject.complete,
	};
}
