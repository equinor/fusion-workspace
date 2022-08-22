import { useEffect, useState } from 'react';
import { WorkspaceController } from '../classes';

export function useError<TabNames extends string, TData, TOnClick, TContext, TError>(
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>
) {
	const [error, setError] = useState<TError | undefined>(controller.error.value);

	useEffect(() => {
		const unsubscribe = controller.error.onchange(setError);
		return unsubscribe;
	}, []);

	return error;
}
