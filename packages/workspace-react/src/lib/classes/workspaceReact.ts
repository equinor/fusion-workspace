import { ObjectType } from '@workspace/workspace-core';
import { Tab } from '../types';
import { WorkspaceReactMediator } from './workspaceReactMediator';
import { WorkspaceViewController } from './workspaceViewController';

type Component = () => JSX.Element;

export class WorkspaceReact<TabNames extends string> {
	controller = new WorkspaceViewController();
	mediator = new WorkspaceReactMediator();
	/** Adds a tab to the workspace */

	addStatusBarComponent = (comp: Component) => {
		this.controller.StatusBarComponent = comp;
	};

	addSidesheetComponent = (comp: Component) => {
		this.controller.sidesheet.Component = comp;
	};

	constructor() {
		mediatorSetup(this.controller, this.mediator);
	}
}

type BuilderFunc<TabNames extends string> = (builder: WorkspaceReact<TabNames>) => WorkspaceReact<TabNames>;

/** Creates a new react workspace controller */
export function createReactWorkspaceController<TabNames extends string>(builder: BuilderFunc<TabNames>) {
	return builder(new WorkspaceReact()).controller;
}

function mediatorSetup(
	controller: WorkspaceViewController<string, unknown>,
	mediator: WorkspaceReactMediator<unknown, ObjectType<unknown>, ObjectType<unknown>, ObjectType<unknown>>
) {
	controller.isMounted.onchange((mounted) => {
		if (mounted) {
			mediator.setMount();
		} else {
			mediator.setUnmount();
		}
	});
}
