import { useState, useEffect } from 'react';
import { WorkspaceViewController } from '../classes';

export function useSidesheetTitle(controller: WorkspaceViewController<any, any>) {
	const [sidesheetTitle, setSidesheetTitle] = useState(controller.sidesheet.title.value);

	useEffect(() => {
		const unsubscribe = controller.sidesheet.title.onchange(setSidesheetTitle);
		return unsubscribe;
	}, []);

	return sidesheetTitle;
}
