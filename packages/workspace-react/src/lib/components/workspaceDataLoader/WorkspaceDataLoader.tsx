import { ReactNode } from 'react';
import { useActiveTab } from '../../hooks';
import { WorkspaceLoadingSpinner } from '../workspaceLoadingSpinner';

interface WorkspaceDataLayerProps {
	children: ReactNode;
	isLoading: boolean;
}

/**
 * Component that renders a loading spinner while data is fetching
 * @param children Children to render when data is done loading
 */

export function WorkspaceDataLoader({ children, isLoading }: WorkspaceDataLayerProps) {
	const activeTab = useActiveTab();

	if (activeTab?.ignoreLoading) {
		return <>{children}</>;
	}
	if (isLoading) {
		return <WorkspaceLoadingSpinner />;
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
}
