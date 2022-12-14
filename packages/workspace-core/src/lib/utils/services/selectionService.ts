import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { ServiceCtor } from '../../types/serviceCtor';

export const createSelectionService = <TNodes>(destroy: ServiceCtor) => {
	const selectionService = createObservableProxy<{ selectedNodes: TNodes[] }>({ selectedNodes: [] });
	destroy(() => selectionService.completeAll());
	return selectionService;
};
