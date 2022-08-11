import { StatusItem } from '../../types';
import { StyledStatusBar } from './statusBar.styles';
import { StatusBarItem } from './StatusBarItem';

interface StatusBarProps {
	items: StatusItem[];
}

export function StatusBar({ items }: StatusBarProps): JSX.Element {
	if (!items.length) {
		//Returns div for styling purposes
		return <div></div>;
	}

	return (
		<StyledStatusBar>
			{items.map((item) => (
				<StatusBarItem key={item.title} item={item} />
			))}
		</StyledStatusBar>
	);
}
