import { WorkspaceOnClick, FusionMediator, GetIdentifier } from '../../types';
import { useOnClick } from '../../hooks/useOnClick';
import { Icon } from '@equinor/eds-core-react';
import { chevron_right, close, chevron_left } from '@equinor/eds-icons';
import { MediatorProvider } from '../provider';
import { SidesheetConfig } from 'lib/integrations/sidesheet';

interface SidesheetWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> {
	Component: SidesheetConfig<TData>['Sidesheet'];
	mediator: FusionMediator<TData, TContext>;
	getIdentifier: GetIdentifier<TData>;
}

Icon.add({ chevron_right, close, chevron_left });
export function SidesheetWrapper<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ Component, mediator, getIdentifier }: SidesheetWrapperProps<TData, TContext>) {
	const clickEvent = useOnClick(mediator);

	/**
	 * Add fusion sidesheet header here with color etc here..
	 */

	if (!clickEvent?.item) {
		return null;
	}
	//TODO: Introduce url loading of sidesheets
	return (
		<div>
			<MediatorProvider mediator={mediator}>
				<Component id={getIdentifier(clickEvent.item)} item={clickEvent.item} />
			</MediatorProvider>
		</div>
	);
}
