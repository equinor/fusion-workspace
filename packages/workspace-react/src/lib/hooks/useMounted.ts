import { useEffect } from 'react';
import { WorkspaceViewController } from '../classes';

export function useMounted<WorkspaceTabNames extends string, TError>(
	controller: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	useEffect(() => {
		controller.isMounted.setValue(true);
		return () => {
			controller.isMounted.setValue(false);
		};
	}, []);
}
