import { SidesheetController } from '@equinor/sidesheet';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { SidesheetWrapper } from '../../components';
import { FusionMediator, SidesheetConfig, WorkspaceTabNames } from '../../types';

/** TODO: Review this and either expand context or expand baseclass. Sidesheet state is shared directly between two controllers! */
export function addSidesheet<TData, TError>(
	config: SidesheetConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	viewController.addSidesheetComponent(() => <SidesheetWrapper Component={config.Component} mediator={mediator} />);

	mediator.onSidesheetStateChange(viewController.sidesheet.setIsOpen);

	mediator.clickService.onClick((ev) => {
		viewController.sidesheet.title.setValue(config.getTitle(ev));
	});
	sidesheetConfig<TData, TError>(new SidesheetController(), mediator);
}

function sidesheetConfig<TData, TError>(
	sc: SidesheetController<TData, unknown>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.onSidesheetStateChange((isOpen) => sc.setSidesheetState(isOpen ? 'Open' : 'Closed'));

	mediator.clickService.onClick((ev) => {
		sc.setItem(ev.item);
		mediator.setIsSidesheetOpen(true);
	});
}
