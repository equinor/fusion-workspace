import { tokens } from '@equinor/eds-tokens';
import { StyledNormalText } from '../components/filterGroup/filterGroup.styles';

export function getFilterHeaderText(
  isAllChecked: boolean,
  name: string,
  checkedValues: string[]
): string | JSX.Element {
  if (isAllChecked || checkedValues.length === 0) return <StyledNormalText>{name}</StyledNormalText>;

  return (
    <div style={{ color: tokens.colors.interactive.primary__resting.hex }}>
      {checkedValues.length - 1 > 0
        ? `${checkedValues[0] ?? '(Blank)'}(+${checkedValues.length - 1})`
        : `${checkedValues[0]}`}{' '}
    </div>
  );
}
