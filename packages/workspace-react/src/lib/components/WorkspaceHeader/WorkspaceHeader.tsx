import { useActiveTab } from '../../hooks';
import { ActionBar } from '../ActionBar';

export function WorkspaceHeader() {
	const tab = useActiveTab();
	if (!tab || !tab.CustomHeader) return <ActionBar />;

	return <tab.CustomHeader />;
}