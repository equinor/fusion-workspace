import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(obs$: Observable<T>, defaultValue?: T) {
	const [state, setState] = useState<T | undefined>(defaultValue);

	useEffect(() => {
		const sub = obs$.subscribe(setState);
		return () => sub.unsubscribe();
	}, [obs$]);

	return state;
}
