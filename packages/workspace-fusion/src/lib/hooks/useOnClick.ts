import { useEffect, useState } from 'react';
import { WorkspaceOnClick } from '../types';
import { FusionWorkspaceController } from '../types/fusionController';

/**
 * Listens to the workspace controller onClick event and captures it in a reactive state
 * @returns workspace onCLick event as reactive state
 */
export function useOnClick<TData, TError>({ onclick }: FusionWorkspaceController<TData, TError>) {
	const [clickEvent, setClickEvent] = useState<WorkspaceOnClick<TData> | undefined>(onclick.value);

	useEffect(() => {
		const unsubscribe = onclick.onchange(setClickEvent);

		return unsubscribe;
	}, []);

	return clickEvent;
}
