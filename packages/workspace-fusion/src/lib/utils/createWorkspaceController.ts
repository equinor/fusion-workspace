import { FusionMediator, WorkspaceController, FusionBookmark } from '../types';

/**
 * Transforms the mediator to workspace controller.
 */
export function createWorkspaceController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(mediator: FusionMediator<TData, TContext>): WorkspaceController<TData, TContext> {
	return {
		setBookmark: (bookmark: FusionBookmark<TData>) => mediator.bookmarkService.apply(bookmark),
		setContext: (cb) => mediator.contextService.setContext(cb(mediator.dataService.filteredData ?? [])),
		setData: (data) => {
			mediator.dataService.data = data;
		},
		setError: (error) => mediator.errorService.error(error),
	};
}
