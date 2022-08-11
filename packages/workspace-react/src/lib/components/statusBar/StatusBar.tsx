import { StatusItem } from '../../types';
import { StatusBarItem } from './StatusBarItem';

interface StatusBarProps {
	items: StatusItem[];
}

export function StatusBar({ items }: StatusBarProps): JSX.Element | null {
	if (!items.length) {
		return null;
	}

	return (
		<div style={{ display: 'flex', gap: '2em' }}>
			{items?.map((item) => (
				<StatusBarItem key={item.title} item={item} />
			))}
		</div>
	);
}
