import { Subject } from 'rxjs';
import { postChangeEvent } from '../postChangeEvent';

export function createClickService<TOnClick extends Record<PropertyKey, unknown>>() {
	const clickSubject = new Subject<TOnClick>();
	return {
		click: (click: TOnClick, origin: string) => {
			postChangeEvent({ newVal: click, origin: origin, target: 'click', timestamp: new Date(), type: 'audit' });
			clickSubject.next(click);
		},
		click$: clickSubject.asObservable(),
		complete: clickSubject.complete,
	};
}
