import { useEffect } from 'react';
import { WorkspaceViewController } from '../classes';

export function useMounted<TTabNames extends string, TError>(controller: WorkspaceViewController<TTabNames, TError>) {
	useEffect(() => {
		controller.isMounted.setValue(true);
		return () => {
			controller.isMounted.setValue(false);
		};
	}, []);
}
