import { useEffect, useState } from 'react';
import { WorkspaceController } from '../classes';
import { useIsSidesheetOpen } from './useIsSidesheetOpen';

/**
 * Hook for returning sidesheet width
 * Will return 0 if the sidesheet is closed
 */
export function useSidesheetWidth<TabNames extends string, TData, TOnClick, TContext, TError>(
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>
) {
	const isOpen = useIsSidesheetOpen(controller);

	const [sidesheetWidth, setSidesheetWidth] = useState<number>(controller.sidesheet.width.value ?? 0);

	useEffect(() => {
		const unsubscribe = controller.sidesheet.width.onchange(setSidesheetWidth);
		return unsubscribe;
	}, []);

	return isOpen ? sidesheetWidth : 0;
}
