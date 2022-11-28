import { useActiveTab } from '../../hooks';
import { ActionBar } from '../ActionBar';

export function WorkspaceHeader() {
	const tab = useActiveTab();
	if (!tab || !tab.CustomHeader) return <ActionBar />;

	return (
		<div style={{ paddingTop: '24px' }}>
			<tab.CustomHeader />
		</div>
	);
}
