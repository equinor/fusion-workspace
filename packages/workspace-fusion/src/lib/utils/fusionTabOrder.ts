import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames } from '../types';

const TabSortOrder = new Map<WorkspaceTabNames, number>();
TabSortOrder.set('garden', 0);
TabSortOrder.set('grid', 1);

export function sortFusionTabs<TError>(viewController: WorkspaceViewController<WorkspaceTabNames, TError>) {
	viewController.tabs.sort((a, b) => {
		return (TabSortOrder.get(a.name) ?? Infinity) - (TabSortOrder.get(b.name) ?? Infinity);
	});
	return viewController;
}
