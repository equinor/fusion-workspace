import { StatusItem } from '../types';
import { StatusCard, Title, ValueWrapper, Value, Group} from './statusBarItem.styles';

interface StatusBarItemProps {
  item?: StatusItem;
  groupName?: string;
}
export function StatusBarItem({ item, groupName }: StatusBarItemProps) {
  const formattedValue = formatValue(item?.value ?? '');

  return (
    <StatusCard title={item?.description} key={item?.title}>
      <Title>{item?.title}</Title>
      <ValueWrapper>{groupName ? <Group>{groupName}</Group> : <Value>{formattedValue}</Value>}</ValueWrapper>
    </StatusCard>
  );
}

const formatValue = (value: string | number) => {
  if (typeof value === 'number') {
    if (value === 0) {
      return '-';
    }
    return value.toLocaleString('no');
  }
  return value;
};
