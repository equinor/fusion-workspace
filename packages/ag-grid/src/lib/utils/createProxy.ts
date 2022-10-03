import { BehaviorSubject, Observable } from 'rxjs';

/**Picks keys that extends the given type */
export type PickTypeKeys<Obj, Type, T extends keyof Obj = keyof Obj> = {
	[P in keyof Obj]: Obj[P] extends Type ? P : never;
}[T];

export type OmitType<T, Type> = Omit<T, PickTypeKeys<T, Type>>;

export type SubscriberProxy<Type> = Type & {
	[Property in keyof OmitType<Type, (...args: any) => any> as `${Property & string}$`]: Observable<Type[Property]>;
};

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
				return false;
			}

			subjects.get(`${String(index)}$`)?.next(newVal);
			// eslint-disable-next-line no-param-reassign
			prop[index as keyof T] = newVal;
			return true;
		},
	});
}
