import { BaseEvent } from '@equinor/workspace-core';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { IsNeverType } from '../../../types/typescriptUtils/isNeverType';
import { useEffect, useState } from 'react';
import { FusionEvents, FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../../types';
import { SidesheetConfig } from '../sidesheet';
import { SidesheetWrapper } from './wrapper';

export function addSidesheet<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
>(
	Config:
		| ((
				ev: IsNeverType<
					TCustomSidesheetEvents,
					FusionEvents<TData>,
					TCustomSidesheetEvents | FusionEvents<TData>
				>
		  ) => JSX.Element)
		| undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	if (!Config) return;

	mediator.selectionService.selectedNodes$.subscribe((val) => {
		const node = val[0];
		if (!node) return;

		const ev: FusionEvents<TData> = { type: 'details_sidesheet', props: { id: node.id, item: node.item } };
		mediator.sidesheetService.sendEvent(ev);
	});
	viewController.addSidesheetComponent(() => {
		const [ev, setEv] = useState<IsNeverType<
			TCustomSidesheetEvents,
			FusionEvents<TData>,
			TCustomSidesheetEvents | FusionEvents<TData>
		> | null>(null);

		useEffect(() => {
			const sub = mediator.sidesheetService.subscribeAll(setEv);
			return () => sub();
		}, []);
		if (!ev) {
			return <></>;
		}

		return <Config {...(ev as any)} />;
	});

	// viewController.addSidesheetComponent(() => (
	// 	<SidesheetWrapper getIdentifier={mediator.getIdentifier} Component={Config.Sidesheet} mediator={mediator} />
	// ));
}
