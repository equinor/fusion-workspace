import { WorkspaceOnClick, FusionWorkspaceController } from '../../types';
import { useOnClick } from '../../hooks/useOnClick';
import { Icon } from '@equinor/eds-core-react';
import { chevron_right, close, chevron_left } from '@equinor/eds-icons';

interface SidesheetWrapperProps<TData, TError> {
	Component: (ev: WorkspaceOnClick<TData>) => JSX.Element;
	mediator: FusionWorkspaceController<TData, TError>;
}

Icon.add({ chevron_right, close, chevron_left });
export function SidesheetWrapper<TData, TError>({ Component, mediator }: SidesheetWrapperProps<TData, TError>) {
	const clickEvent = useOnClick(mediator);

	/**
	 * Add fusion sidesheet header here with color etc here..
	 */

	if (!clickEvent?.item) {
		return null;
	}

	return (
		<div>
			<Component item={clickEvent.item} />
		</div>
	);
}
