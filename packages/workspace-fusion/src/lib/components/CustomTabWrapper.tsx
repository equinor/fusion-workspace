import { CustomTabComponent, FusionMediator } from '../types';
import { MediatorProvider } from './provider/MediatorProvider';

interface CustomTabWrapperProps<TData, TError> {
	mediator: FusionMediator<TData, TError>;
	Component: CustomTabComponent;
}

export function CustomTabWrapper<TData, TError>({ Component, mediator }: CustomTabWrapperProps<TData, TError>) {
	return (
		<div>
			<MediatorProvider mediator={mediator}>
				<Component />
			</MediatorProvider>
		</div>
	);
}
