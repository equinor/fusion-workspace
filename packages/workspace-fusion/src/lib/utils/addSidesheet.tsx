import { SidesheetController } from '@equinor/sidesheet';
import { WorkspaceController } from '@workspace/workspace-core';
import { useEffect } from 'react';
import { useState } from 'react';
import { SidesheetConfig } from '../types/configuration';
import { WorkspaceControllers } from '../types/controllers';
import { WorkspaceOnClick } from '../types/onClick';

/** TODO: Review this and either expand context or expand baseclass. Sidesheet state is shared directly between two controllers! */
export function addSidesheet<TData, TError, TContext>(
	config: SidesheetConfig<TData>,
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>
) {
	const sc = new SidesheetController();
	controller.onClick((ev) => {
		sc.setItem(ev.item);
		sc.setSidesheetState('Open');
	});
	controller.controllers.view.sidesheet.Component = () => (
		<SidesheetWrapper Component={config.Component} controller={controller} />
	);
	sc.onSidesheetStateChanged((state) => {
		controller.controllers.view.sidesheet.setIsOpen(state === 'Open');
	});
}

interface SidesheetWrapperProps<TData, TError, TContext> {
	Component: (ev: WorkspaceOnClick<TData>) => JSX.Element;
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>;
}

function SidesheetWrapper<TData, TError, TContext>({
	Component,
	controller,
}: SidesheetWrapperProps<TData, TError, TContext>) {
	const [item, setItem] = useState<TData | null>(null);

	useEffect(() => {
		const { unSubscribe } = controller.onClick((ev) => setItem(ev.item));

		return unSubscribe;
	}, []);

	if (!item) {
		return null;
	}

	return <Component item={item} />;
}
