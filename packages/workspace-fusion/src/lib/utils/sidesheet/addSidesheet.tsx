// import { SidesheetController } from '@equinor/workspace-sidesheet';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { SidesheetWrapper } from '../../components';
import { FusionMediator, SidesheetConfig, WorkspaceTabNames } from '../../types';

/** TODO: Review this and either expand context or expand baseclass. Sidesheet state is shared directly between two controllers! */
export function addSidesheet<TData extends Record<PropertyKey, unknown>, TError>(
	config: SidesheetConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	viewController.addSidesheetComponent(() => <SidesheetWrapper Component={config.Component} mediator={mediator} />);
}
