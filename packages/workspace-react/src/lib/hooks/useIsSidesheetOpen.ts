import { useEffect, useState } from 'react';
import { WorkspaceController } from '../classes';

export function useIsSidesheetOpen<TabNames extends string, TData, TOnClick, TContext, TError>(
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>
) {
	const [isSidesheetOpen, setIsSidesheetOpen] = useState(controller.sidesheet.isOpen.value);

	useEffect(() => {
		const unsubscribe = controller.sidesheet.isOpen.onchange(setIsSidesheetOpen);
		return unsubscribe;
	}, []);

	return isSidesheetOpen;
}
