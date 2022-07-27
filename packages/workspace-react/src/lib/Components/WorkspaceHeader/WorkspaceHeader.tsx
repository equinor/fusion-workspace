import { StatusBar } from '../';
import { useWorkspaceController } from '../../Hooks/useWorkspaceController';
import { TabNavigation } from '../TabNavigation';
import { StyledWorkspaceHeader } from './workspaceHeader.styles';
/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader() {
    const { controllers } = useWorkspaceController();
    function handleSearch(value: string) {
        if (value === '') {
            controllers.filter.clearSearch();
        } else {
            controllers.filter.search({
                searchValue: value,
                searchIn: 'FilteredData',
                type: 'includes',
                valueFormatters: [{ name: 'Title', valueFormatter: ({ title }) => title }],
            });
        }
    }
    return (
        <StyledWorkspaceHeader>
            <input
                type={'text'}
                onChange={(e) => {
                    handleSearch(e.currentTarget.value);
                }}
            />
            <StatusBar />
            <TabNavigation />
        </StyledWorkspaceHeader>
    );
}
