
import { WorkspaceLoadingSpinner } from '../workspaceLoadingSpinner';

interface WorkspaceDataLayerProps {
    children: React.ReactNode;
}

/**
 * Component that renders a loading spinner while data is fetching
 * @param children Children to render when data is done loading
 * @returns
 */

export function WorkspaceDataLoader({ children }: WorkspaceDataLayerProps) {

    // if (isLoading) {
    //     return <WorkspaceLoadingSpinner />;
    // }

    return <>{children}</>;
}
