import { ReactNode } from 'react';
import { useStatusBar } from '../../integrations/status-bar';
import { TabNavigation } from '../TabNavigation';
import { StyledActionBar } from './actionBar.styles';

type TabNavigationChildren = {
	children?: ReactNode;
};

export function ActionBar(props: TabNavigationChildren) {
	const StatusBar = useStatusBar();

	return (
		<StyledActionBar>
			{StatusBar && <StatusBar />}
			<TabNavigation children={props.children} />
		</StyledActionBar>
	);
}
