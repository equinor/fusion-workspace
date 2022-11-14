import { CustomTabComponent, FusionMediator } from '../types';
import { MediatorProvider } from './provider/MediatorProvider';

interface CustomTabWrapperProps<TData extends Record<PropertyKey, unknown>> {
	mediator: FusionMediator<TData>;
	Component: CustomTabComponent;
}

export function CustomTabWrapper<TData extends Record<PropertyKey, unknown>>({
	Component,
	mediator,
}: CustomTabWrapperProps<TData>) {
	return (
		<div>
			<MediatorProvider mediator={mediator}>
				<Component />
			</MediatorProvider>
		</div>
	);
}
