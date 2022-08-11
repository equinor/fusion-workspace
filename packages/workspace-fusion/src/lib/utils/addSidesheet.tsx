import { SidesheetController } from '@equinor/sidesheet';
import { SidesheetWrapper } from '../components';
import { FusionWorkspaceController } from '../types';
import { SidesheetConfig } from '../types/configuration';

/** TODO: Review this and either expand context or expand baseclass. Sidesheet state is shared directly between two controllers! */
export function addSidesheet<TData, TError, TContext>(
	config: SidesheetConfig<TData>,
	controller: FusionWorkspaceController<TData, TError, TContext>
) {
	controller.controllers.view.sidesheet.Component = () => (
		<SidesheetWrapper Component={config.Component} controller={controller} />
	);
	controller.addController({
		controller: new SidesheetController(),
		name: 'sidesheet',
		config: (sidesheetController, workspaceController) => {
			sidesheetController.onSidesheetStateChanged((state) => {
				workspaceController.controllers.view.sidesheet.setIsOpen(state === 'Open');
			});
			workspaceController.onClick((ev) => {
				sidesheetController.setItem(ev.item);
				sidesheetController.setSidesheetState('Open');
			});
		},
	});
}
