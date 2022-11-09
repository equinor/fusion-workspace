import { StatusItem } from '../types/statusItem';
import { StyledStatusBar } from './statusBar.styles';
import { StatusBarItem } from './StatusBarItem';

interface StatusBarProps {
	items: StatusItem[];
}

export function StatusBar({ items }: StatusBarProps): JSX.Element | null {
	if (!items.length) return null;

	return (
		<StyledStatusBar>
			{items.map((item) => (
				<StatusBarItem key={item.title} item={item} />
			))}
		</StyledStatusBar>
	);
}
