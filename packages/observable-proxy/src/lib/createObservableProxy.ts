import { BehaviorSubject, Observable } from 'rxjs';
import { SubscriberProxy } from './types';

function createSubjects<T extends Record<PropertyKey, unknown>>(obj: T) {
	const subjects = new Map<string, BehaviorSubject<unknown>>();
	const object: Record<PropertyKey, Observable<any>> = {};
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'function') return;
		const subject = new BehaviorSubject(obj[key]);
		subjects.set(`${key}$`, subject);
		object[`${key}$`] = subject.asObservable();
	});

	return {
		subjects,
		object,
	};
}

export function createObservableProxy<T extends Record<PropertyKey, unknown>>(
	obj: T,
	compare?: (prop: T, index: keyof T, newVal: T[keyof T]) => boolean
): SubscriberProxy<T> {
	const { object, subjects } = createSubjects(obj);

	const decoratedObject: SubscriberProxy<T> = {
		...object,
		...obj,
		completeAll: () => {
			subjects.forEach((s) => s.complete());
		},
	};

	return new Proxy(decoratedObject, {
		set(prop, index, newVal) {
			if (index.toString().includes('$')) {
				//Dont allow reassigning of observables
				return false;
			}

			if (compare) {
				if (compare(prop, index, newVal)) {
					return false;
				}
			}

			subjects.get(`${String(index)}$`)?.next(newVal);
			// eslint-disable-next-line no-param-reassign
			prop[index as keyof T] = newVal;
			return true;
		},
	});
}
