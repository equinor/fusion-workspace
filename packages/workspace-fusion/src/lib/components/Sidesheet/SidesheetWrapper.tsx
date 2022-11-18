import { WorkspaceOnClick, FusionMediator } from '../../types';
import { useOnClick } from '../../hooks/useOnClick';
import { Icon } from '@equinor/eds-core-react';
import { chevron_right, close, chevron_left } from '@equinor/eds-icons';
import { MediatorProvider } from '../provider';

interface SidesheetWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> {
	Component: (ev: WorkspaceOnClick<TData>) => JSX.Element;
	mediator: FusionMediator<TData, TContext>;
}

Icon.add({ chevron_right, close, chevron_left });
export function SidesheetWrapper<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ Component, mediator }: SidesheetWrapperProps<TData, TContext>) {
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
