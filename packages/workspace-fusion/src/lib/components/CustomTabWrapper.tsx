import { CustomTabComponent, FusionMediator } from '../types';
import { MediatorProvider } from './provider/MediatorProvider';

interface CustomTabWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> {
	mediator: FusionMediator<TData, TContext>;
	Component: CustomTabComponent;
}

export function CustomTabWrapper<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ Component, mediator }: CustomTabWrapperProps<TData, TContext>) {
	return (
		<div>
			<MediatorProvider mediator={mediator}>
				<Component />
			</MediatorProvider>
		</div>
	);
}
