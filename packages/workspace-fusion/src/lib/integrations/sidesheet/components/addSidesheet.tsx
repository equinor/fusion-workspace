import { BaseEvent } from '@equinor/workspace-core';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { ReactNode, useEffect } from 'react';
import { WorkspaceSidesheets, FusionMediator, WorkspaceTabNames } from '../../../types';
import { SidesheetConfig } from '../sidesheet';
import { SidesheetAdvancedWrapper } from './wrapper';
import { SidesheetSimpleWrapper } from './wrapper/SidesheetSimpleWrapper';

export function addSidesheet<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	config: SidesheetConfig<TData, TContext, TCustomSidesheetEvents> | undefined,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): (() => JSX.Element) | undefined {
	if (!config || Object.keys(config).length === 0) return;

	if (config.type === 'custom') {
		return () => (
			<Wrapper mediator={mediator}>
				<SidesheetAdvancedWrapper config={config} mediator={mediator} />
			</Wrapper>
		);
	}
	if (config.type === 'default') {
		return () => (
			<Wrapper mediator={mediator}>
				<SidesheetSimpleWrapper config={config} mediator={mediator} />
			</Wrapper>
		);
	}
	return;
}

type Props = {
	children: ReactNode;
	mediator: FusionMediator<any, any, any>;
};

function Wrapper({ children, mediator }: Props) {
	useEffect(() => {
		const sub = mediator.selectionService.selectedNodes$.subscribe((val) => {
			const node = val[0];
			if (!node) return;

			const ev: WorkspaceSidesheets<any> = { type: 'details_sidesheet', props: { id: node.id, item: node.item } };
			mediator.sidesheetService.sendEvent(ev);
		});

		return () => {
			sub.unsubscribe();
		};
	}, [mediator]);

	return <>{children}</>;
}
