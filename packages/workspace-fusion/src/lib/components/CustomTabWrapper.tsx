import { useFilteredData } from '../hooks';
import { CustomTabComponent, FusionWorkspaceController } from '../types';

interface CustomTabWrapperProps<TData, TError, TContext> {
	controller: FusionWorkspaceController<TData, TError, TContext>;
	Component: CustomTabComponent<TData>;
}

export function CustomTabWrapper<TData, TError, TContext>({
	Component,
	controller,
}: CustomTabWrapperProps<TData, TError, TContext>) {
	const data = useFilteredData(controller);

	return (
		<div>
			<Component data={data} />
		</div>
	);
}
