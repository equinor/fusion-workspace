import { BaseEvent } from '@equinor/workspace-core';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceSidesheets, FusionMediator, WorkspaceTabNames } from '../../../types';
import { isSidesheetAdvanced, isSidesheetSimple, SidesheetConfig } from '../sidesheet';
import { SidesheetAdvancedWrapper } from './wrapper';
import { SidesheetSimpleWrapper } from './wrapper/SidesheetSimpleWrapper';

export function addSidesheet<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
>(
	config: SidesheetConfig<TData, TContext, TCustomSidesheetEvents> | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	if (!config || Object.keys(config).length === 0) return;

	mediator.selectionService.selectedNodes$.subscribe((val) => {
		const node = val[0];
		if (!node) return;

		const ev: WorkspaceSidesheets<TData> = { type: 'details_sidesheet', props: { id: node.id, item: node.item } };
		mediator.sidesheetService.sendEvent(ev);
	});

	if (isSidesheetAdvanced(config)) {
		viewController.addSidesheetComponent(() => <SidesheetAdvancedWrapper config={config} mediator={mediator} />);
		return;
	}
	if (isSidesheetSimple(config)) {
		viewController.addSidesheetComponent(() => <SidesheetSimpleWrapper config={config} mediator={mediator} />);
		return;
	}
}
