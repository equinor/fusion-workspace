import { FusionMediator, WorkspaceTabNames } from '@equinor/workspace-fusion';

/** Sets the current active tab based on the url */
export function setTabFromUrl<TData, TError>(mediator: FusionMediator<TData, TError>) {
	const tab = mediator.urlService.url.queryParams.find((params) => params.includes('tab='));
	if (!tab) return;
	const [, newTab] = tab.split('tab=');
	if (!newTab) return;
	console.log(`Found tab from url ${newTab}`);
	mediator.setActiveTab(newTab as WorkspaceTabNames);
}
