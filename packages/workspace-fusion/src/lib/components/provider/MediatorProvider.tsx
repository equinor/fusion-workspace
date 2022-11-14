import { createContext, ReactNode } from 'react';
import { useMediatorAsState } from '../../hooks';
import { FusionMediator } from '../../types';

type MediatorProviderProps<TData extends Record<PropertyKey, unknown>> = {
	children: ReactNode;
	mediator: FusionMediator<TData>;
};
export const MediatorProvider = <TData extends Record<PropertyKey, unknown>, TError>({
	children,
	mediator,
}: MediatorProviderProps<TData>) => (
	<MediatorContext.Provider value={useMediatorAsState(mediator) as FusionMediator<Record<PropertyKey, unknown>>}>
		{children}
	</MediatorContext.Provider>
);

export const MediatorContext = createContext<FusionMediator<Record<PropertyKey, unknown>>>(
	{} as FusionMediator<Record<PropertyKey, unknown>>
);
