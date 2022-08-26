import { createContext, ReactNode } from 'react';
import { useMediatorAsState } from '../../hooks';
import { FusionWorkspaceController } from '../../types';

interface MediatorProviderProps<TData, TError> {
	children: ReactNode;
	mediator: FusionWorkspaceController<TData, TError>;
}
export const MediatorProvider = <TData, TError>({ children, mediator }: MediatorProviderProps<TData, TError>) => (
	<MediatorContext.Provider value={useMediatorAsState(mediator) as FusionWorkspaceController<unknown, unknown>}>
		{children}
	</MediatorContext.Provider>
);

export const MediatorContext = createContext<FusionWorkspaceController<unknown, unknown>>(
	{} as FusionWorkspaceController<unknown, unknown>
);
