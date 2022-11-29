import { useStatusBar } from '../../integrations/status-bar';
import { TabNavigation } from '../TabNavigation';
import { StyledActionBar } from './actionBar.styles';

export function ActionBar() {
	const StatusBar = useStatusBar();

	return (
		<StyledActionBar>
			{StatusBar && <StatusBar />}
			<TabNavigation />
		</StyledActionBar>
	);
}
