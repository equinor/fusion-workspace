import { WorkspaceOnClick, FusionWorkspaceController } from '../../types';
import { useOnClick } from '../../hooks/useOnClick';
import { SidesheetHeader } from './Header';
import { Icon } from '@equinor/eds-core-react';
import { chevron_right, close, chevron_left } from '@equinor/eds-icons';

interface SidesheetWrapperProps<TData, TError> {
	Component: (ev: WorkspaceOnClick<TData>) => JSX.Element;
	controller: FusionWorkspaceController<TData, TError>;
}

Icon.add({ chevron_right, close, chevron_left });
export function SidesheetWrapper<TData, TError>({ Component, controller }: SidesheetWrapperProps<TData, TError>) {
	const clickEvent = useOnClick(controller);

	/**
	 * Add fusion sidesheet header here with color etc here..
	 */

	if (!clickEvent?.item) {
		return null;
	}

	return (
		<div>
			<SidesheetHeader
				color={controller.getContext()?.ui.color ?? 'white'}
				title={controller.getContext()?.ui.appKey ?? ''}
				close={controller.controllers.sidesheet.closeAndRemoveItem}
			/>
			<Component item={clickEvent.item} />
		</div>
	);
}
