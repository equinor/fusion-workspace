import { StatusItem } from '../../types';
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
		<div style={{ display: 'flex', gap: '2em', margin: '0px 32px' }}>
			{items?.map((item) => (
				<StatusBarItem key={item.title} item={item} />
			))}
		</div>
	);
}
