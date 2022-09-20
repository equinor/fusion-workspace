import { CustomTabComponent, FusionMediator } from '../types';
import { MediatorProvider } from './provider/MediatorProvider';

interface CustomTabWrapperProps<TData> {
	mediator: FusionMediator<TData>;
	Component: CustomTabComponent;
}

export function CustomTabWrapper<TData>({ Component, mediator }: CustomTabWrapperProps<TData>) {
	return (
		<div>
			<MediatorProvider mediator={mediator}>
				<Component />
			</MediatorProvider>
		</div>
	);
}
