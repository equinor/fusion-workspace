import type * as WorkspaceConfig from '@equinor/workspace-fusion';
import { lazy } from 'react';

const DEFAULT_PATH = 'https://unpkg.com/@equinor/workspace-fusion';

const WS = lazy(async () => await import(DEFAULT_PATH));

export function InnerLoader<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends WorkspaceConfig.BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceConfig.WorkspaceProps<
		TData,
		TContext,
		TCustomSidesheetEvents,
		TExtendedFields,
		TCustomGroupByKeys
	> & {
		loadPath: string;
	}
) {
	return <WS {...props} />;
}
