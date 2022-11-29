import { SidesheetConfig } from '../sidesheet';

export type WorkspaceSidesheetProps<TData extends Record<PropertyKey, unknown>> = {
	sidesheetOptions?: SidesheetConfig<TData>;
};
