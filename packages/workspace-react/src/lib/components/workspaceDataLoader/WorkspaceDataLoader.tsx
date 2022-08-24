import { ReactNode } from 'react';
import { useIsLoading } from '../../hooks/useIsLoading';
import { WorkspaceLoadingSpinner } from '../workspaceLoadingSpinner';

interface WorkspaceDataLayerProps {
	children: ReactNode;
}

/**
 * Component that renders a loading spinner while data is fetching
 * @param children Children to render when data is done loading
 */

export function WorkspaceDataLoader({ children }: WorkspaceDataLayerProps) {
	if (useIsLoading()) {
		return <WorkspaceLoadingSpinner />;
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
}
