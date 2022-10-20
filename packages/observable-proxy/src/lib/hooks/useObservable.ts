import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

/**
 * Takes in an observable and returns its value as a state
 * @param obs$ - The observable to subscribe to
 * @param initialValue - Initial value
 */
export function useObservable<T>(obs$: Observable<T>, initialValue?: T) {
	const [state, setState] = useState<T | undefined>(initialValue);

	useEffect(() => {
		const sub = obs$.subscribe(setState);
		return () => sub.unsubscribe();
	});

	return state;
}
