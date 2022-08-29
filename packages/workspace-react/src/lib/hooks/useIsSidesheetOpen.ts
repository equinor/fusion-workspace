import { useEffect, useState } from 'react';
import { useControllerContext } from './useControllerContext';

export function useIsSidesheetOpen() {
	const controller = useControllerContext();

	const [isSidesheetOpen, setIsSidesheetOpen] = useState(controller.sidesheet.isOpen);

	useEffect(() => {
		const { unsubscribe } = controller.sidesheet.onOpenOrClosedChanged(setIsSidesheetOpen);
		return unsubscribe;
	}, []);

	return isSidesheetOpen;
}
