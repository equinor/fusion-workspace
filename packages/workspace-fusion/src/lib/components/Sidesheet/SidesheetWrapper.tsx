import { WorkspaceOnClick, FusionWorkspaceController } from '../../types';
import { useOnClick } from '../../hooks/useOnClick';
import { SidesheetHeader } from './Header';
import { Icon } from '@equinor/eds-core-react';
import { chevron_right, close, chevron_left } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

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
			<SidesheetHeader
				color={mediator.context.value?.ui.color ?? tokens.colors.ui.background__default.hex}
				title={mediator.context.value?.ui.appKey ?? ''}
				close={() => mediator.isSidesheetOpen.setValue(false)}
			/>
			<Component item={clickEvent.item} />
		</div>
	);
}
