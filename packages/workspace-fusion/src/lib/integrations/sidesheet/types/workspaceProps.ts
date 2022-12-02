import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../types';
import { SidesheetConfig } from '../sidesheet';

export type WorkspaceSidesheetProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent<string>
> = {
	sidesheetOptions?: SidesheetConfig<TData, TContext, TCustomSidesheetEvents>;
};
