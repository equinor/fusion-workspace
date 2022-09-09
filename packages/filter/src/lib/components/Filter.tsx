import { useFilterContext } from '../hooks';
import { QuickFilter } from './quickFilter/QuickFilter';
import { playlist_add, search } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
Icon.add({ playlist_add, search });

export function Filter() {
	useEnsureContext();
	const controller = useFilterContext();
	const { groups } = controller;
	return <QuickFilter controller={controller} groups={groups} />;
}

function useEnsureContext() {
	const context = useFilterContext();
	if (!context) throw new Error('Filter component must be wrapped in FilterContextProvider');
}
