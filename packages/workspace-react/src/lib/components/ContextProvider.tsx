import { ReactNode } from 'react';
import { WorkspaceViewController } from '../classes';
import { ControllerContext } from '../context';

interface ContextProviderProps<TTabNames extends string, TError> {
	controller: WorkspaceViewController<TTabNames, TError>;
	children: ReactNode;
}

export function ContextProvider<TTabNames extends string, TError>({
	children,
	controller,
}: ContextProviderProps<TTabNames, TError>) {
	return <ControllerContext.Provider value={controller}>{children}</ControllerContext.Provider>;
}
