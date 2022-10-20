import { useEffect, useState } from 'react';
import { Observable, OperatorFunction } from 'rxjs';

/**
 * Hook for using observables as state
 * @param obs$ - Observable to read values from
 * @param selector - Optionally transform the values inside the stream, useful for stuff like debounce etc...
 * @returns derived state
 */

export function useObservable<T, R = T>(obs$: Observable<T>, selector?: OperatorFunction<T, R>): R | undefined {
	const [state, setState] = useState<R | T>();

	let observable$: Observable<T | R> = obs$;

	if (selector) {
		observable$ = obs$.pipe(selector);
	}

	useEffect(() => {
		const sub = observable$.subscribe(setState);
		return () => sub.unsubscribe();
	}, []);

	return state as R;
}
