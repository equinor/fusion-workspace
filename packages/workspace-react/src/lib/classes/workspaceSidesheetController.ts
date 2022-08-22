import { Observable } from '@workspace/workspace-core';

export class WorkspaceSidesheetController {
	Component?: () => JSX.Element;

	isOpen = new Observable(false);
	width = new Observable(1000);
	minWidth = new Observable(200);
}
