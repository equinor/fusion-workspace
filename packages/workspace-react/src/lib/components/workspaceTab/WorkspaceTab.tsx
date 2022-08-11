import { useActiveTab } from '../../hooks/useActiveTab';
import { WorkspaceProps } from '../Workspace';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab<TabNames extends string, TError>({ controller }: WorkspaceProps<TabNames, TError>) {
    const tab = useActiveTab(controller);

    if (!tab) return null;
    const { Component } = tab;
    return <Component />;
}
