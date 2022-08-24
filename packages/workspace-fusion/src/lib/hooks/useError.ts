import { useState, useEffect } from 'react';
import { FusionMediator } from '../types';

export function useError<TData, TError>(mediator: FusionMediator<TData, TError>) {
	const [error, setError] = useState<TError | undefined>(mediator.error.value);

	useEffect(() => {
		const unsubscribe = mediator.error.onchange(setError);
		return unsubscribe;
	}, []);

	return error;
}
