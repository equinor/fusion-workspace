import { useActiveTab } from '../../hooks';
import { ActionBar } from '../ActionBar';

export function WorkspaceHeader() {
	const tab = useActiveTab();

	return <div id="workspace_header">{!tab || !tab.CustomHeader ? <ActionBar /> : <tab.CustomHeader />}</div>;
}
