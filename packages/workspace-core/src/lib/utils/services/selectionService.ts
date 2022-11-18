import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { ServiceCtor } from '../../types/serviceCtor';

export const createSelectionService = (destroy: ServiceCtor) => {
	const selectionService = createObservableProxy<{ selectedNodes: string[] }>({ selectedNodes: [] });
	destroy(() => selectionService.completeAll());
	return selectionService;
};
