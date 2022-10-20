import { useObservable } from '@equinor/workspace-observable-proxy';
import { FusionMediator } from '../types/fusionController';

/**
 * Listens to the workspace controller onClick event and captures it in a reactive state
 * @returns workspace onCLick event as reactive state
 */
export const useOnClick = <TData>({ clickService }: FusionMediator<TData>) => useObservable(clickService.click$);
