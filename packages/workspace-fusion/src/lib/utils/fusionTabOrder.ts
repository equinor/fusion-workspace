import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../types';

const tabSortOrder = new Map<WorkspaceTabNames, number>();
tabSortOrder.set('garden', 0);
tabSortOrder.set('grid', 1);

export function sortFusionTabs<TError>(viewController: WorkspaceViewController<WorkspaceTabNames, TError>) {
	viewController.tabs.sort((a, b) => {
		return (tabSortOrder.get(a.name) ?? Infinity) - (tabSortOrder.get(b.name) ?? Infinity);
	});
	return viewController;
}
