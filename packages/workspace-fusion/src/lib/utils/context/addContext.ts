import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator, FusionWorkspaceError, WorkspaceProps, WorkspaceTabNames } from '../../types';

export function addContext<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(
	contextOptions: WorkspaceProps<TData, TContext>['contextOptions'] | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>,
	mediator: FusionMediator<TData, TContext>
) {
	if (!contextOptions) return;

	mediator.dataService.filteredData$.subscribe((data) => {
		if (!data) return;
		mediator.contextService.setContext(contextOptions(data));
	});
}
