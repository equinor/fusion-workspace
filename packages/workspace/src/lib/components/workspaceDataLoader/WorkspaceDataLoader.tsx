
import { WorkspaceViewController } from '../../classes';
import { useIsLoading } from '../../hooks/useIsLoading';
import { WorkspaceLoadingSpinner } from '../workspaceLoadingSpinner';

interface WorkspaceDataLayerProps<TabNames extends string, TError> {
    children: React.ReactNode;
    controller: WorkspaceViewController<TabNames, TError>;
}

/**
 * Component that renders a loading spinner while data is fetching
 * @param children Children to render when data is done loading
 * @returns
 */

export function WorkspaceDataLoader<TabNames extends string, TError>({ children, controller }: WorkspaceDataLayerProps<TabNames, TError>) {
    
    if (useIsLoading(controller)) {
        return <WorkspaceLoadingSpinner />;
    }

    return <>{children}</>;
}
