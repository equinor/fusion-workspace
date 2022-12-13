import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator, ViewBookmark, WorkspaceTabNames } from '../../../types';
import { useEffect } from 'react';

type Config = {
	mediator: FusionMediator<any, any, any>;
	viewController: WorkspaceViewController<any, any>;
};

export const useBookmarkState = ({ mediator, viewController }: Config) => {
	useEffect(() => {
		/** Bookmarks */
		const sub = mediator.bookmarkService.apply$.subscribe(
			(state) => state?.view && applyViewStateBookmark(state.view, viewController)
		);
		return () => {
			sub.unsubscribe();
		};
	}, []);
};

/** Applies a fusion bookmark to the view controller */
function applyViewStateBookmark<TError>(
	viewBookmark: ViewBookmark,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>
) {
	viewController.tabController.setActiveTab(viewBookmark.activeTab as WorkspaceTabNames);
}
