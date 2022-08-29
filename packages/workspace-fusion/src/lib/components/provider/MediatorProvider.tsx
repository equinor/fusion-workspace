import { createContext, ReactNode } from 'react';
import { useMediatorAsState } from '../../hooks';
import { FusionMediator } from '../../types';

interface MediatorProviderProps<TData, TError> {
	children: ReactNode;
	mediator: FusionMediator<TData, TError>;
}
export const MediatorProvider = <TData, TError>({ children, mediator }: MediatorProviderProps<TData, TError>) => (
	<MediatorContext.Provider value={useMediatorAsState(mediator) as FusionMediator<unknown, unknown>}>
		{children}
	</MediatorContext.Provider>
);

export const MediatorContext = createContext<FusionMediator<unknown, unknown>>({} as FusionMediator<unknown, unknown>);
