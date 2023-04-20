import { StatusItem } from '../types';
import { StatusCard, Title, ValueWrapper, Value } from './statusBarItem.styles';

interface StatusBarItemProps {
  item: StatusItem;
}
export function StatusBarItem({ item }: StatusBarItemProps) {
  const formattedValue = typeof item.value === 'number' ? item.value.toLocaleString('no') : item.value;

  return (
    <StatusCard title={item.description} key={item.title}>
      <Title>{item.title}</Title>
      <ValueWrapper>
        <Value>{formattedValue}</Value>
      </ValueWrapper>
    </StatusCard>
  );
}
