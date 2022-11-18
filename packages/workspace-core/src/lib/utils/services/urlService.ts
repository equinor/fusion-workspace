import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { ServiceCtor } from '../../types/serviceCtor';

export const createUrlService = (destroy: ServiceCtor) => {
	const urlService = createObservableProxy({ url: new URL(window.location.href) });
	destroy(() => urlService.completeAll());
	return urlService;
};
