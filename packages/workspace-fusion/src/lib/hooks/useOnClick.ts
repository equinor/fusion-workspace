import { useEffect, useState } from 'react';
import { WorkspaceOnClick } from '../types';
import { FusionMediator } from '../types/fusionController';

/**
 * Listens to the workspace controller onClick event and captures it in a reactive state
 * @returns workspace onCLick event as reactive state
 */
export function useOnClick<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ clickService: { click$ } }: FusionMediator<TData, TContext>) {
	const [clickEvent, setClickEvent] = useState<WorkspaceOnClick<TData> | undefined>();

	useEffect(() => {
		const subscription = click$.subscribe(setClickEvent);

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return clickEvent;
}
