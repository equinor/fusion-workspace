import { useState, useEffect } from 'react';
import { FusionWorkspaceController } from '../types';

export function useError<TData, TError>(mediator: FusionWorkspaceController<TData, TError>) {
	const [error, setError] = useState<TError | undefined>(mediator.error.value);

	useEffect(() => {
		const unsubscribe = mediator.error.onchange(setError);
		return unsubscribe;
	}, []);

	return error;
}
