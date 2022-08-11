import { WorkspaceOnClick, FusionWorkspaceController } from '../types';
import { useOnClick } from '../hooks/useOnClick';

interface SidesheetWrapperProps<TData, TError, TContext> {
	Component: (ev: WorkspaceOnClick<TData>) => JSX.Element;
	controller: FusionWorkspaceController<TData, TError, TContext>;
}

export function SidesheetWrapper<TData, TError, TContext>({
	Component,
	controller,
}: SidesheetWrapperProps<TData, TError, TContext>) {
	const clickEvent = useOnClick(controller);

	/**
	 * Add fusion sidesheet header here with color etc here..
	 */

	if (!clickEvent?.item) {
		return null;
	}

	return <Component item={clickEvent.item} />;
}
