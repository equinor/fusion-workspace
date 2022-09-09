import { useEffect, useState } from 'react';
import { useControllerContext } from './useControllerContext';
import { useIsSidesheetOpen } from './useIsSidesheetOpen';

/**
 * Hook for returning sidesheet width
 * Will return 0 if the sidesheet is closed
 */
export function useSidesheetWidth() {
	const controller = useControllerContext();
	const isOpen = useIsSidesheetOpen();

	const [sidesheetWidth, setSidesheetWidth] = useState<number>(controller.sidesheet.width);

	useEffect(() => {
		const { unsubscribe } = controller.sidesheet.onWidthChange(setSidesheetWidth);
		return unsubscribe;
	}, []);

	return isOpen ? sidesheetWidth : 0;
}
