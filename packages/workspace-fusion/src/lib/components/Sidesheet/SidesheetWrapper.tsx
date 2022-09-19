import { WorkspaceOnClick, FusionMediator } from '../../types';
import { useOnClick } from '../../hooks/useOnClick';
import { Icon } from '@equinor/eds-core-react';
import { chevron_right, close, chevron_left } from '@equinor/eds-icons';
import { MediatorProvider } from '../provider';

interface SidesheetWrapperProps<TData> {
	Component: (ev: WorkspaceOnClick<TData>) => JSX.Element;
	mediator: FusionMediator<TData>;
}

Icon.add({ chevron_right, close, chevron_left });
export function SidesheetWrapper<TData>({ Component, mediator }: SidesheetWrapperProps<TData>) {
	const clickEvent = useOnClick(mediator);

	/**
	 * Add fusion sidesheet header here with color etc here..
	 */

	if (!clickEvent?.item) {
		return null;
	}

	return (
		<div>
			<MediatorProvider mediator={mediator}>
				<Component item={clickEvent.item} />
			</MediatorProvider>
		</div>
	);
}
