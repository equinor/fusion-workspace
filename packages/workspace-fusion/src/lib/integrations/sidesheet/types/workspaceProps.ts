import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../types';
import { SidesheetConfig } from '../sidesheet';

export type WorkspaceSidesheetProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent<string>
> = {
	sidesheetOptions?: SidesheetConfig<TData>;
	Sidesheet?: (
		ev: Parameters<FusionMediator<TData, TContext, TCustomSidesheetEvents>['sidesheetService']['sendEvent']>[0]
	) => JSX.Element;
};
