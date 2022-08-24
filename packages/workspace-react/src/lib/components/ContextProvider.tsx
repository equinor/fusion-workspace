import { ReactNode } from 'react';
import { WorkspaceViewController } from '../classes';
import { controllerContext } from '../context';

interface ContextProviderProps<TTabNames extends string, TError> {
	controller: WorkspaceViewController<TTabNames, TError>;
	children: ReactNode;
}

export function ContextProvider<TTabNames extends string, TError>({
	children,
	controller,
}: ContextProviderProps<TTabNames, TError>) {
	return <controllerContext.Provider value={controller}>{children}</controllerContext.Provider>;
}
