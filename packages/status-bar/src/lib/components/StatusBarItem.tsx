import { StatusItem } from '../types';
import { StatusCard, Title, ValueWrapper, Value } from './statusBarItem.styles';

type StatusBarItemProps = {
	item: StatusItem;
};
export function StatusBarItem({ item }: StatusBarItemProps) {
	return (
		<StatusCard title={item.description} key={item.title}>
			<Title>{item.title}</Title>
			<ValueWrapper>
				<Value>{item.value}</Value>
			</ValueWrapper>
		</StatusCard>
	);
}
