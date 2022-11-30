import { useFilterContext } from '../hooks';
import { QuickFilter } from './quickFilter/QuickFilter';
import { playlist_add, search, drag_handle, chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { useEffect, useState } from 'react';
Icon.add({ playlist_add, search, drag_handle, chevron_down, chevron_up });
/**
 * CC filter used in workspace
 * Requires being wrapped in FilterContextProvider
 */
export function Filter() {
	useEnsureContext();
	const controller = useFilterContext();
	const [isReady, setIsReady] = useState<boolean>(Boolean(controller.filterGroups$.value));

	useEffect(() => {
		const sub = controller.filterGroups$.subscribe((val) => {
			if (Boolean(val) === isReady) return;
			setIsReady(Boolean(val));
		});
		return () => sub.unsubscribe();
	}, []);

	if (!isReady) return null;

	return <QuickFilter controller={controller} />;
}
/**
 * Ensures the component is wrapped in the correct context
 */
function useEnsureContext() {
	const context = useFilterContext();
	if (!context) throw new Error('Filter component must be wrapped in FilterContextProvider');
}
