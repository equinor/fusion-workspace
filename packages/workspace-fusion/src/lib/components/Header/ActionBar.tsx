import { useStatusBar } from '../../utils/statusBar/addStatusBar';
import { StyledActionBar } from './actionBar.styles';
import { TabNavigation } from './TabNavigation';

export function ActionBar() {
	const StatusBar = useStatusBar();

	return (
		<StyledActionBar>
			{StatusBar && <StatusBar />}
			<TabNavigation />
		</StyledActionBar>
	);
}
