import { SidesheetController } from '@equinor/sidesheet';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { SidesheetWrapper } from '../components';
import { FusionWorkspaceController, WorkspaceTabNames } from '../types';
import { SidesheetConfig } from '../types/configuration';

/** TODO: Review this and either expand context or expand baseclass. Sidesheet state is shared directly between two controllers! */
export function addSidesheet<TData, TError>(
	config: SidesheetConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	viewController.sidesheet.Component = () => <SidesheetWrapper Component={config.Component} mediator={mediator} />;

	mediator.onSidesheetStateChange(viewController.sidesheet.setIsOpen);

	mediator.onClick((ev) => {
		viewController.sidesheet.title.setValue(config.getTitle(ev));
	});
	sidesheetConfig<TData, TError>(new SidesheetController(), mediator);
}

function sidesheetConfig<TData, TError>(
	sc: SidesheetController<TData, unknown>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	mediator.onSidesheetStateChange((isOpen) => sc.setSidesheetState(isOpen ? 'Open' : 'Closed'));

	mediator.onClick((ev) => {
		sc.setItem(ev.item);
		mediator.setIsSidesheetOpen(true);
	});
}
