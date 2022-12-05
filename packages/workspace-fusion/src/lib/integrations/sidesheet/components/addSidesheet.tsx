import { BaseEvent } from '@equinor/workspace-core';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { IsNeverType } from '../../../types/typescriptUtils/isNeverType';
import { useEffect, useState } from 'react';
import { WorkspaceSidesheets, FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../../types';
import { SidesheetConfig } from '../sidesheet';
import { SidesheetWrapper } from './wrapper';

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
	if (!config) return;

	mediator.selectionService.selectedNodes$.subscribe((val) => {
		const node = val[0];
		if (!node) return;

		const ev: WorkspaceSidesheets<TData> = { type: 'details_sidesheet', props: { id: node.id, item: node.item } };
		mediator.sidesheetService.sendEvent(ev);
	});

	viewController.addSidesheetComponent(() => <SidesheetWrapper config={config} mediator={mediator} />);
}
