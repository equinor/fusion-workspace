import { useEffect } from 'react';
import { WorkspaceController } from '../classes/workspaceController';
import { WorkspaceBody } from './workspaceBody';
import { WorkspaceHeader } from './workspaceHeader';
export interface WorkspaceProps<TTabName extends string, TData, TOnClick, TError, TContext> {
	controller: WorkspaceController<TTabName, TData, TOnClick, TContext, TError>;
}

export function Workspace<TTabNames extends string, TData, TOnClick, TContext, TError>({
	controller,
}: WorkspaceProps<TTabNames, TData, TOnClick, TContext, TError>) {
	useEffect(() => {
		controller.isMounted.setValue(true);
		return () => {
			controller.isMounted.setValue(false);
		};
	}, []);

	return (
		<div>
			<WorkspaceHeader controller={controller} />
			<WorkspaceBody controller={controller} />
		</div>
	);
}
