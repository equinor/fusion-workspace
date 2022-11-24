import { createContext, ReactNode } from 'react';
import { useMediatorAsState } from '../../hooks';
import { FusionMediator } from '../../types';

type MediatorProviderProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	children: ReactNode;
	mediator: FusionMediator<TData, TContext>;
};
export const MediatorProvider = <
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>({
	children,
	mediator,
}: MediatorProviderProps<TData, TContext>) => (
	<MediatorContext.Provider
		value={useMediatorAsState(mediator as unknown as FusionMediator<Record<PropertyKey, unknown>, never>)}
	>
		{children}
	</MediatorContext.Provider>
);

export const MediatorContext = createContext<FusionMediator<Record<PropertyKey, unknown>>>(
	{} as FusionMediator<Record<PropertyKey, unknown>>
);
