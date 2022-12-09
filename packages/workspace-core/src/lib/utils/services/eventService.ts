import { ServiceCtor } from '../../types/serviceCtor';
import { Subject } from 'rxjs';
import { BaseEvent } from '../../types/event';

type EventBus<TEvents extends BaseEvent> = {
	sendEvent: (ev: TEvents) => void;
	subscribe: (key: TEvents['type'], handler: (ev: TEvents) => void) => () => void;
	subscribeAll: (handler: (ev: TEvents) => void) => () => void;
};

export const createEventService = <TEvents extends BaseEvent>(destroy: ServiceCtor): EventBus<TEvents> => {
	const subject = new Subject<TEvents>();
	destroy(() => subject.complete());
	return {
		sendEvent: (ev: TEvents) => subject.next(ev),
		subscribe: (key: TEvents['type'], cb: (detail: TEvents) => void) => {
			const sub = subject.subscribe((val) => {
				if (val.type === key) {
					cb(val);
				}
			});
			return () => sub.unsubscribe();
		},
		subscribeAll: (cb: (ev: TEvents) => void) => {
			const sub = subject.subscribe(cb);
			return () => sub.unsubscribe();
		},
	};
};
