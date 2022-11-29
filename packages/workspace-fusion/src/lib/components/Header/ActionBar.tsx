import { useStatusBar } from '../../integrations/status-bar/utils/addStatusBar';
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
