import { SidesheetController } from '@equinor/workspace-sidesheet';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { SidesheetWrapper } from '../../components';
import { FusionMediator, SidesheetConfig, WorkspaceTabNames } from '../../types';

/** TODO: Review this and either expand context or expand baseclass. Sidesheet state is shared directly between two controllers! */
export function addSidesheet<TData, TError>(
	config: SidesheetConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	viewController.addSidesheetComponent(() => <SidesheetWrapper Component={config.Component} mediator={mediator} />);

	mediator.onSidesheetStateChange(viewController.sidesheet.setIsOpen);

	mediator.clickService.click$.subscribe((ev) => {
		viewController.sidesheet.title.setValue(config.getTitle(ev));
	});
	sidesheetConfig<TData>(new SidesheetController(), mediator);
}

function sidesheetConfig<TData>(sc: SidesheetController<TData, unknown>, mediator: FusionMediator<TData>) {
	mediator.onSidesheetStateChange((isOpen) => sc.setSidesheetState(isOpen ? 'Open' : 'Closed'));

	mediator.clickService.click$.subscribe((ev) => {
		sc.setItem(ev.item);
		mediator.setIsSidesheetOpen(true);
	});
}
