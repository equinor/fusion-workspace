import { BehaviorSubject } from 'rxjs';

export const createReactiveBehaviourCallback = <T>(initialState: T) => {
	const subject = new BehaviorSubject<T>(initialState);
	const emit = (value: T) => subject.next(value);
	const observable = subject.asObservable();
	return { emit, observable, subject };
};
