import { useEffect, useState } from 'react';
import { WorkspaceController } from '../classes';

export function useIsLoading<TabNames extends string, TData, TOnClick, TContext, TError>(
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>
) {
	const [isLoading, setIsLoading] = useState(controller.isLoading.value);

	useEffect(() => {
		const unsubscribe = controller.isLoading.onchange(setIsLoading);
		return unsubscribe;
	}, []);

	return isLoading;
}
