import { useState, useEffect } from 'react';
import { useControllerContext } from './useControllerContext';

export function useSidesheetTitle() {
	const controller = useControllerContext();
	const [sidesheetTitle, setSidesheetTitle] = useState(controller.sidesheet.title.value);

	useEffect(() => {
		const unsubscribe = controller.sidesheet.title.onchange(setSidesheetTitle);
		return unsubscribe;
	}, []);

	return sidesheetTitle;
}
