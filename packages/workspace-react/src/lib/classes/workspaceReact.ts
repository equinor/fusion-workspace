import { WorkspaceReactMediator } from './workspaceReactMediator';
import { WorkspaceViewController } from './workspaceViewController';

export class WorkspaceReact<TabNames extends string, TData, TOnClick, TError, TContext> {
	controller = new WorkspaceViewController<TabNames, TError>();
	mediator = new WorkspaceReactMediator<TData, TOnClick, TError, TContext>();
	/** Adds a tab to the workspace */

	constructor() {
		mediatorSetup(this.controller, this.mediator);
	}
}

type BuilderFunc<TabNames extends string, TData, TOnClick, TError, TContext> = (
	builder: WorkspaceReact<TabNames, TData, TOnClick, TError, TContext>
) => WorkspaceReact<TabNames, TData, TOnClick, TError, TContext>;

/** Creates a new react workspace controller */
export function createReactWorkspaceController<TabNames extends string, TData, TOnClick, TError, TContext>(
	builder: BuilderFunc<TabNames, TData, TOnClick, TError, TContext>
) {
	return builder(new WorkspaceReact()).controller;
}

function mediatorSetup<TabNames extends string, TData, TOnClick, TError, TContext>(
	controller: WorkspaceViewController<TabNames, TError>,
	mediator: WorkspaceReactMediator<TData, TOnClick, TError, TContext>
) {
	mediator.onIsLoadingChange(controller.viewState.setIsLoading);

	controller.isMounted.onchange((mounted) => {
		if (mounted) {
			mediator.setMount();
		} else {
			mediator.setUnmount();
		}
	});
}
