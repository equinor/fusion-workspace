import { useFilteredData } from '../hooks';
import { CustomTabComponent, FusionMediator } from '../types';

interface CustomTabWrapperProps<TData, TError> {
	mediator: FusionMediator<TData, TError>;
	Component: CustomTabComponent<TData>;
}

export function CustomTabWrapper<TData, TError>({ Component, mediator }: CustomTabWrapperProps<TData, TError>) {
	const data = useFilteredData(mediator);

	return (
		<div>
			<Component data={data} onClick={(ev) => mediator.click(ev)} />
		</div>
	);
}
