import { BehaviorSubject, Observable } from 'rxjs';
import { CoreEvent } from '../../types/coreEvent';

type DataService<TData extends Record<PropertyKey, unknown>> = {
	data: TData[] | null;
	filteredData: TData[] | null;
};

export const createDataService = <TData extends Record<PropertyKey, unknown>>() => {
	const service = createCoreService<DataService<TData>>({ data: [], filteredData: [] });

	return service;
};

export function createCoreService<T extends Record<PropertyKey, unknown>>(obj: T): ObservableProxy<T> {
	const object = {};
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'function') return;
		const subject = new BehaviorSubject<CoreEvent<unknown>>({
			newValue: obj[key],
			event: { newValue: obj[key], oldValue: obj[key], originator: 'init', target: key, timestamp: new Date() },
		});

		object[`set${key.charAt(0).toUpperCase() + key.slice(1)}`] = (val: any, origin: string) => {
			subject.next({
				event: {
					newValue: val,
					oldValue: subject.value.newValue,
					originator: origin,
					target: key,
					timestamp: new Date(),
				},
				newValue: val,
			});
		};
		object[`${key}$`] = subject.asObservable();
	});

	return object as any;
}

export type ObservableProxy<Type> = {
	[Property in keyof Type as `${Property & string}$`]: Observable<CoreEvent<Type[Property]>>;
} & {
	[Property in keyof Type as `set${Capitalize<Property & string>}`]: (value: Type[Property], origin: string) => void;
};
