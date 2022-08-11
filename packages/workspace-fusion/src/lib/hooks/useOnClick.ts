import { useEffect, useState } from 'react';
import { WorkspaceOnClick } from '../types';
import { FusionWorkspaceController } from '../types/fusionController';

/**
 * Listens to the workspace controller onClick event and captures it in a reactive state
 * @returns workspace onCLick event as reactive state
 */
export function useOnClick<TData, TError, TContext>(controller: FusionWorkspaceController<TData, TError, TContext>) {
	const [clickEvent, setClickEvent] = useState<WorkspaceOnClick<TData> | null>(null);

	useEffect(() => {
		const { unSubscribe } = controller.onClick(setClickEvent);

		return unSubscribe;
	}, []);

	return clickEvent;
}
