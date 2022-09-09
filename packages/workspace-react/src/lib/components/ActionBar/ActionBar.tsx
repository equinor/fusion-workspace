import { useControllerContext } from '../../hooks';
import { TabNavigation } from '../tabNavigation';
import { StyledActionBar } from './actionBar.styles';

export function ActionBar() {
	const controller = useControllerContext();

	return (
		<StyledActionBar>
			<div>{controller.StatusBarComponent && <controller.StatusBarComponent />}</div>
			<TabNavigation />
		</StyledActionBar>
	);
}
