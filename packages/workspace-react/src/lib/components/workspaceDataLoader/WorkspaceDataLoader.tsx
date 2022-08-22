import { ReactNode } from 'react';
import { WorkspaceController } from '../../classes';
import { useIsLoading } from '../../hooks/useIsLoading';
import { WorkspaceLoadingSpinner } from '../workspaceLoadingSpinner';

interface WorkspaceDataLayerProps<TabNames extends string, TData, TOnClick, TContext, TError> {
	children: ReactNode;
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>;
}

/**
 * Component that renders a loading spinner while data is fetching
 * @param children Children to render when data is done loading
 */

export function WorkspaceDataLoader<TabNames extends string, TData, TOnClick, TContext, TError>({
	children,
	controller,
}: WorkspaceDataLayerProps<TabNames, TData, TOnClick, TContext, TError>) {
	if (useIsLoading(controller)) {
		return <WorkspaceLoadingSpinner />;
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
}
