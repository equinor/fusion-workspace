import { QueryClient, QueryClientProvider } from 'react-query';
import { WorkspaceController } from '../../Classes';
import { WorkspaceContext } from '../../Context';

interface WorkspaceProviderLayerProps<T> {
    controller: WorkspaceController<T>;
    children: React.ReactNode;
}

const queryClient = new QueryClient();

export function WorkspaceProviderLayer<T>({
    controller,
    children,
}: WorkspaceProviderLayerProps<T>): JSX.Element {
    return (
        <div>
            <WorkspaceContext.Provider value={controller as any}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </WorkspaceContext.Provider>
        </div>
    );
}
