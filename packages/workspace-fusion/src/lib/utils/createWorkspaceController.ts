import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, WorkspaceController, FusionBookmark } from '../types';

/**
 * Transforms the mediator to workspace controller.
 */
export function createWorkspaceController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): WorkspaceController<TData, TContext, TCustomSidesheetEvents> {
	return {
		setBookmark: (bookmark: FusionBookmark<TData>) => mediator.bookmarkService.apply(bookmark),
		setContext: (cb) => mediator.contextService.setContext(cb(mediator.dataService.filteredData ?? [])),
		setData: (data) => {
			mediator.dataService.data = data;
		},
		setError: (error) => mediator.errorService.error(error),
		api: mediator,
	};
}
