import { useFilteredData } from '../hooks';
import { CustomTabComponent, FusionWorkspaceController } from '../types';

interface CustomTabWrapperProps<TData, TError> {
	controller: FusionWorkspaceController<TData, TError>;
	Component: CustomTabComponent<TData>;
}

export function CustomTabWrapper<TData, TError>({ Component, controller }: CustomTabWrapperProps<TData, TError>) {
	const data = useFilteredData(controller);

	return (
		<div>
			<Component data={data} onClick={(ev) => controller.click(ev)} />
		</div>
	);
}
