import { WorkspaceViewController } from '../classes';
import { useEffect } from 'react';

export const useSetFallbackTab = <TTabName extends string, TError>(
	controller: WorkspaceViewController<TTabName, TError>
) => {
	useEffect(() => {
		const fallbackTab = controller.tabController.tabs[0];
		if (controller.tabController.activeTab || !fallbackTab) return;
		controller.tabController.setActiveTab(fallbackTab.name);
	}, [controller]);
};
