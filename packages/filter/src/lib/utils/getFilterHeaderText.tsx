import { tokens } from '@equinor/eds-tokens';
import { StyledNormalText } from '../components/filterGroup/filterGroup.styles';

export function getFilterHeaderText(isAllChecked: boolean, name: string, checkedValues: string[]): JSX.Element {
  const selectedCount = checkedValues.length;

  return isAllChecked || selectedCount === 0 ? (
    <StyledNormalText>{name}</StyledNormalText>
  ) : (
    <div style={{ color: tokens.colors.interactive.primary__resting.hex }}>{`${name} (+${selectedCount})`}</div>
  );
}
