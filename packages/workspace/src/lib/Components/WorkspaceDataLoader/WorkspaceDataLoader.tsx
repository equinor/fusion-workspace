import { useQuery } from 'react-query';
import { DataSourceController } from '../../Classes';
import { useWorkspaceController } from '../../Hooks';
import { WorkspaceLoadingSpinner } from '../WorkspaceLoadingSpinner';

interface WorkspaceDataLayerProps {
    children: React.ReactNode;
}

export function WorkspaceDataLoader<T>({ children }: WorkspaceDataLayerProps) {
    const { controllers } = useWorkspaceController();
    const dataSourceController = controllers.find((s) => s.name === 'DataSource')
        ?.controller as DataSourceController<T>;
    if (!dataSourceController) {
        throw 'No data source controller added';
    }

    const { isLoading } = useQuery(['Workspace data'], dataSourceController.fetchData, {
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return <WorkspaceLoadingSpinner />;
    }

    return <>{children}</>;
}
