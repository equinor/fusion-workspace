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

	/**
	 * Add fusion sidesheet header here with color etc here..
	 */

	if (!item) {
		return null;
	}

	return <Component item={item} />;
}
