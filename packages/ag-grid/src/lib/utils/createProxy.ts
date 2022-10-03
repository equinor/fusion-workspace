import { BehaviorSubject, Observable } from 'rxjs';
import { SubscriberProxy } from '../types';

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

export function createProxy<T extends Record<PropertyKey, unknown>>(obj: T): SubscriberProxy<T> {
	const { object, subjects } = createSubjects(obj);

	const proxiedObject = { ...obj, ...object };

	return new Proxy(proxiedObject, {
		set(prop, index, newVal) {
			if (index.toString().includes('$')) {
				//Dont allow reassigning of observables
				return false;
			}

			subjects.get(`${String(index)}$`)?.next(newVal);
			// eslint-disable-next-line no-param-reassign
			prop[index as keyof T] = newVal;
			return true;
		},
	});
}
