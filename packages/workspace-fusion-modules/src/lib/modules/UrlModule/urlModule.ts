import { FusionMediator, WorkspaceFusionModule } from '@equinor/workspace-fusion';
import {
	configureUrlSyncWithMediator,
	setTabFromUrl,
	setTabOnBrowserNavigation,
	updateQueryParamsOnClick,
	updateUrlOnTabChange,
} from './utils';

export const UrlModule: WorkspaceFusionModule = {
	setup,
	name: 'UrlModule',
};

/** Function for fusion workspace to call upon to configure this module */
function setup<TData, TError>(mediator: FusionMediator<TData, TError>) {
	configureUrlSyncWithMediator(mediator);
	updateQueryParamsOnClick(mediator);
	updateUrlOnTabChange(mediator);
	setTabFromUrl(mediator);
	setTabOnBrowserNavigation(mediator);
}
