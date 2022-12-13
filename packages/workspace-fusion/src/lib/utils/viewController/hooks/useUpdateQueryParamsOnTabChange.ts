import { WorkspaceViewController } from '@equinor/workspace-react';
import { BrowserHistory } from 'history';
import { FusionMediator, ViewBookmark, WorkspaceTabNames } from '../../../types';
import { useEffect } from 'react';
import { updateQueryParams } from '../../../classes/fusionUrlHandler';

type Config = {
	mediator: FusionMediator<any, any, any>;
	viewController: WorkspaceViewController<any, any>;
	history: BrowserHistory;
};

export const useUpdateQueryParamsOnTabChange = ({ mediator, history, viewController }: Config) => {
	useEffect(() => {
		const unsub = viewController.tabController.onActiveTabChanged((tab) => {
			updateQueryParams([['tab', tab.toLowerCase()]], mediator, history);
		});
		return () => {
			unsub();
		};
	}, []);
};
