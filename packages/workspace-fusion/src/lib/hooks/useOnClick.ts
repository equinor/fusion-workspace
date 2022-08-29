import { useEffect, useState } from 'react';
import { WorkspaceOnClick } from '../types';
import { FusionMediator } from '../types/fusionController';

/**
 * Listens to the workspace controller onClick event and captures it in a reactive state
 * @returns workspace onCLick event as reactive state
 */
export function useOnClick<TData, TError>({ lastClick, onClick }: FusionMediator<TData, TError>) {
	const [clickEvent, setClickEvent] = useState<WorkspaceOnClick<TData> | undefined>(lastClick);

	useEffect(() => {
		const unsubscribe = onClick(setClickEvent);

		return unsubscribe;
	}, []);

	return clickEvent;
}
