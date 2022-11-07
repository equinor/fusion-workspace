import { createContext, ReactNode } from 'react';
import { useMediatorAsState } from '../../hooks';
import { FusionMediator } from '../../types';

type MediatorProviderProps<TData> = {
	children: ReactNode;
	mediator: FusionMediator<TData>;
};
export const MediatorProvider = <TData, TError>({ children, mediator }: MediatorProviderProps<TData>) => (
	<MediatorContext.Provider value={useMediatorAsState(mediator) as FusionMediator<unknown>}>
		{children}
	</MediatorContext.Provider>
);

export const MediatorContext = createContext<FusionMediator<unknown>>({} as FusionMediator<unknown>);
